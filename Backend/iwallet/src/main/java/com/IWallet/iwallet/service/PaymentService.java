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

@Service // Memberi tahu Spring Boot bahwa kelas ini adalah Service Layer yang menangani logika bisnis (Business Logic)
@RequiredArgsConstructor // Lombok: Membuat constructor otomatis untuk injeksi dependensi (Dependency Injection)
public class PaymentService {

    private final UserRepository userRepository;
    private final WalletRepository walletRepository;
    private final MerchantRepository merchantRepository;
    private final TransactionRepository transactionRepository;
    
    //Instantiate BCryptPasswordEncoder internally for PIN verification
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Transactional(rollbackFor = Exception.class) // ACID: Memastikan jika ada error di tengah proses pembayaran, saldo tidak terpotong (Rollback)
    public TransactionResponseDTO executePayment(String userPublicId, PaymentRequestDTO request, String idempotencyKey) {
        
        //a. Idempotency Check
        if (transactionRepository.existsByIdempotencyKey(idempotencyKey)) {
            throw new RuntimeException("Transaksi dengan Idempotency Key ini sudah diproses!");
        }

        //b. Amount Validation
        if (request.getAmount() == null || request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("Nominal pembayaran tidak valid!");
        }

        //c. Fetch User
        User user = userRepository.findByPublicId(userPublicId)
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));

        //d. PIN Verification
        if (!passwordEncoder.matches(request.getPin(), user.getPin())) {
            throw new RuntimeException("PIN salah");
        }

        //e. Fetch Merchant
        Merchant merchant = merchantRepository.findByPublicId(request.getMerchantPublicId())
                .orElseThrow(() -> new RuntimeException("Merchant tidak ditemukan!"));

        //f. Fetch Wallet (Pessimistic Lock)
        Wallet wallet = walletRepository.findByUserPublicIdForUpdate(userPublicId)
                .orElseThrow(() -> new RuntimeException("Dompet tidak ditemukan!"));

        //g. Balance Check
        if (wallet.getBalance().compareTo(request.getAmount()) < 0) {
            throw new RuntimeException("Saldo tidak mencukupi");
        }

        //h. Deduct Balance
        wallet.setBalance(wallet.getBalance().subtract(request.getAmount()));
        walletRepository.save(wallet);

        //i. Record Transaction
        Transaction transaction = new Transaction();
        transaction.setWallet(wallet);
        transaction.setMerchant(merchant);
        transaction.setTransactionType("PAYMENT");
        transaction.setAmount(request.getAmount());
        transaction.setStatus("SUCCESS");
        transaction.setIdempotencyKey(idempotencyKey);
        
        Transaction savedTx = transactionRepository.save(transaction);

        //j. Return Response
        return TransactionResponseDTO.builder()
                .transactionId(savedTx.getPublicId())
                .currentBalance(wallet.getBalance())
                .status(savedTx.getStatus())
                .message("Pembayaran Berhasil")
                .build();
    }
}

/*
 ┃ @Service:
 ┃ Anotasi ini memberitahu Spring Boot bahwa kelas PaymentService adalah bagian dari
 ┃ Service Layer yang khusus menangani aturan bisnis untuk pembayaran.
 ┃
 ┃ @Transactional:
 ┃ Sangat penting di operasi finansial. Jika saldo sudah terpotong namun
 ┃ tiba-tiba terjadi error saat mencatat transaksi ke database, maka pemotongan
 ┃ saldo tersebut akan dibatalkan (rollback) sehingga uang pengguna aman.
 ┃ Semua operasi di dalam fungsi ini dianggap sebagai 1 kesatuan (ACID).
 ┃
 ┃ Pessimistic Lock (findByUserPublicIdForUpdate):
 ┃ Saat mengambil data Wallet, kita menggunakan kunci pesimis (Pessimistic Lock)
 ┃ agar tidak ada transaksi lain yang mengubah saldo dompet di waktu yang
 ┃ persis bersamaan (mencegah Race Condition).
 */
