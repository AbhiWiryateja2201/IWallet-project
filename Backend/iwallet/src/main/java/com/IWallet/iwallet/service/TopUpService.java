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

@Service // Memberi tahu Spring Boot bahwa kelas ini adalah Service Layer yang menangani logika bisnis
@RequiredArgsConstructor // Lombok: Membuat constructor otomatis untuk variabel final
public class TopUpService {

    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;

    //rollbackFor WAJIB ada agar Exception apapun membatalkan mutasi saldo DB
    @Transactional(rollbackFor = Exception.class) // Memastikan mutasi saldo dibatalkan (rollback) otomatis jika terjadi Exception di tengah proses
    public TransactionResponseDTO executeTopUp(String userPublicId, TopUpRequestDTO request, String idempotencyKey) {
        
        //1. Idempotency Check (Pencegahan Double-Spend)
        if (transactionRepository.existsByIdempotencyKey(idempotencyKey)) {
            throw new RuntimeException("Transaksi dengan Idempotency Key ini sudah diproses!");
        }

        //2. Validasi Nominal Dasar
        if (request.getAmount() == null || request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("Nominal Top-Up tidak valid!");
        }

        //3. Lock Wallet secara Pesimis
        Wallet wallet = walletRepository.findByUserPublicIdForUpdate(userPublicId)
                .orElseThrow(() -> new RuntimeException("Dompet tidak ditemukan!"));

        //4. Update Saldo
        wallet.setBalance(wallet.getBalance().add(request.getAmount()));
        walletRepository.save(wallet);

        //5. Catat Mutasi Transaksi
        Transaction transaction = new Transaction();
        transaction.setWallet(wallet); //Menggunakan relasi objek
        transaction.setMerchant(null); //Top Up tidak pakai merchant
        transaction.setTransactionType("TOP_UP");
        transaction.setAmount(request.getAmount());
        transaction.setStatus("SUCCESS");
        transaction.setIdempotencyKey(idempotencyKey);
        
        Transaction savedTx = transactionRepository.save(transaction);

        //6. Kembalikan Response
        return TransactionResponseDTO.builder()
                .transactionId(savedTx.getPublicId())
                .currentBalance(wallet.getBalance())
                .status(savedTx.getStatus())
                .message("Top Up Berhasil")
                .build();
    }
}

/*
 ┃ @Service:
 ┃ Penanda bahwa kelas TopUpService merupakan komponen Service dalam arsitektur
 ┃ Spring Boot yang menangani proses logika bisnis (seperti validasi dan perhitungan).
 ┃
 ┃ @Transactional(rollbackFor = Exception.class):
 ┃ Mengamankan operasi penambahan saldo. Jika terjadi kesalahan setelah saldo
 ┃ bertambah (misalnya gagal mencatat riwayat transaksi), maka penambahan saldo
 ┃ tersebut akan digagalkan secara otomatis oleh Spring untuk menjaga konsistensi
 ┃ data.
 */
