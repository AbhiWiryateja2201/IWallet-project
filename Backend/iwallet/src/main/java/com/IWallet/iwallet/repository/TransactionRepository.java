package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> { // (Spring Data JPA) Menyediakan operasi CRUD standar untuk tabel Transaction.
    //Cek apakah transaksi dengan Idempotency Key ini sudah ada
    boolean existsByIdempotencyKey(String idempotencyKey);
    
    //Ambil riwayat transaksi berdasarkan user publicId, diurutkan dari yang terbaru
    List<Transaction> findByWallet_User_PublicIdOrderByCreatedAtDesc(String userPublicId);
}

/*
 ┃ File: TransactionRepository.java
 ┃ Layer: Repository
 ┃
 ┃ Penjelasan:
 ┃ Repository ini mengelola akses data ke tabel riwayat transaksi (transactions).
 ┃
 ┃ Poin Penting:
 ┃ Terdapat operasi penting `existsByIdempotencyKey`: Digunakan sebelum transaksi 
 ┃ diproses, untuk mengecek apakah "kunci aman" (idempotency key) dari request tersebut 
 ┃ sudah pernah dipakai. Jika sudah, transaksi ditolak (mencegah double-spend).
 */
