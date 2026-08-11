package com.IWallet.iwallet.service;

import com.IWallet.iwallet.dto.PaymentRequestDTO;
import com.IWallet.iwallet.dto.TransactionResponseDTO;
import com.IWallet.iwallet.model.Merchant;
import com.IWallet.iwallet.model.Transaction;
import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.MerchantRepository;
import com.IWallet.iwallet.repository.TransactionRepository;
import com.IWallet.iwallet.repository.UserRepository;
import com.IWallet.iwallet.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor 
public class PaymentService {

    private final UserRepository userRepository;
    private final WalletRepository walletRepository;
    private final MerchantRepository merchantRepository;
    private final TransactionRepository transactionRepository;
    
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Transactional(rollbackFor = Exception.class)
    public TransactionResponseDTO executePayment(String userPublicId, PaymentRequestDTO request, String idempotencyKey) {
        
        if (transactionRepository.existsByIdempotencyKey(idempotencyKey)) {
            throw new RuntimeException("Transaksi dengan Idempotency Key ini sudah diproses!");
        }

        if (request.getAmount() == null || request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("Nominal pembayaran tidak valid!");
        }

        User user = userRepository.findByPublicId(userPublicId)
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));

        if (!passwordEncoder.matches(request.getPin(), user.getPin())) {
            throw new RuntimeException("PIN salah");
        }

        Merchant merchant = merchantRepository.findByPublicId(request.getMerchantPublicId())
                .orElseThrow(() -> new RuntimeException("Merchant tidak ditemukan!"));

        Wallet wallet = walletRepository.findByUserPublicIdForUpdate(userPublicId)
                .orElseThrow(() -> new RuntimeException("Dompet tidak ditemukan!"));

        if (wallet.getBalance().compareTo(request.getAmount()) < 0) {
            throw new RuntimeException("Saldo tidak mencukupi");
        }

        wallet.setBalance(wallet.getBalance().subtract(request.getAmount()));
        walletRepository.save(wallet);

        Transaction transaction = new Transaction();
        transaction.setWallet(wallet);
        transaction.setMerchant(merchant);
        transaction.setTransactionType("PAYMENT");
        transaction.setAmount(request.getAmount());
        transaction.setStatus("SUCCESS");
        transaction.setIdempotencyKey(idempotencyKey);
        
        Transaction savedTx = transactionRepository.save(transaction);

        return TransactionResponseDTO.builder()
                .transactionId(savedTx.getPublicId())
                .currentBalance(wallet.getBalance())
                .status(savedTx.getStatus())
                .message("Pembayaran Berhasil")
                .build();
    }
}