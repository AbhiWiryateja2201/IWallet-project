package com.IWallet.iwallet.service;

import com.IWallet.iwallet.dto.TopUpRequestDTO;
import com.IWallet.iwallet.dto.TransactionResponseDTO;
import com.IWallet.iwallet.model.Transaction;
import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.TransactionRepository;
import com.IWallet.iwallet.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class TopUpService {

    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;

    @Transactional(rollbackFor = Exception.class)
    public TransactionResponseDTO executeTopUp(String userPublicId, TopUpRequestDTO request, String idempotencyKey) {
        
        if (transactionRepository.existsByIdempotencyKey(idempotencyKey)) {
            throw new RuntimeException("Transaksi dengan Idempotency Key ini sudah diproses!");
        }

        if (request.getAmount() == null || request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("Nominal Top-Up tidak valid!");
        }

        Wallet wallet = walletRepository.findByUserPublicIdForUpdate(userPublicId)
                .orElseThrow(() -> new RuntimeException("Dompet tidak ditemukan!"));

        wallet.setBalance(wallet.getBalance().add(request.getAmount()));
        walletRepository.save(wallet);

        Transaction transaction = new Transaction();
        transaction.setWallet(wallet);
        transaction.setMerchant(null); 
        transaction.setTransactionType("TOP_UP");
        transaction.setAmount(request.getAmount());
        transaction.setStatus("SUCCESS");
        transaction.setIdempotencyKey(idempotencyKey);
        
        Transaction savedTx = transactionRepository.save(transaction);

        return TransactionResponseDTO.builder()
                .transactionId(savedTx.getPublicId())
                .currentBalance(wallet.getBalance())
                .status(savedTx.getStatus())
                .message("Top Up Berhasil")
                .build();
    }
}