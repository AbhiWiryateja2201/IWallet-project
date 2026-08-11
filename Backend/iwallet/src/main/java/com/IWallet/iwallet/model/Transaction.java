package com.IWallet.iwallet.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data // (Lombok) Otomatis membuatkan getter, setter, toString, dll.
@Entity // (JPA) Class ini mewakili sebuah tabel di dalam database.
@Table(name = "transactions") // (JPA) Menentukan nama tabel, yaitu "transactions".
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @Column(name = "public_id", unique = true, nullable = false, updatable = false)
    private String publicId;

    @ManyToOne // (JPA) Relasi Banyak-ke-Satu. Banyak transaksi bisa terjadi pada satu dompet (Wallet).
    @JoinColumn(name = "wallet_id", referencedColumnName = "wallet_id", nullable = false)
    private Wallet wallet;

    @ManyToOne // (JPA) Relasi Banyak-ke-Satu. Banyak transaksi bisa melibatkan satu Merchant.
    @JoinColumn(name = "merchant_id", referencedColumnName = "merchant_id")
    private Merchant merchant;

    @Column(name = "transaction_type", nullable = false)
    private String transactionType;

    @Column(name = "amount", precision = 19, scale = 4, nullable = false)
    private BigDecimal amount;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "idempotency_key", unique = true, nullable = false)
    private String idempotencyKey;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.publicId = UUID.randomUUID().toString();
    }
}

/*
 ┃ File: Transaction.java
 ┃ Layer: Model / Entity
 ┃
 ┃ Penjelasan:
 ┃ File ini mewakili tabel "transactions" yang berfungsi sebagai buku besar (ledger)
 ┃ untuk mencatat setiap mutasi saldo, baik itu uang masuk (Top-up) maupun uang 
 ┃ keluar (Transfer, Pembayaran).
 ┃
 ┃ Poin Penting:
 ┃ 1. Relasi Many-to-One (@ManyToOne): Satu dompet (Wallet) bisa memiliki banyak
 ┃    riwayat transaksi. Oleh karena itu, kita merelasikan transaksi ini kembali ke 
 ┃    entitas Wallet pemiliknya.
 ┃ 2. Idempotency Key: Ada properti unik bernama 'idempotencyKey'. Ini adalah 
 ┃    mekanisme keamanan krusial untuk mencegah "Double Spend" atau transaksi ganda.
 ┃    Jika frontend secara tidak sengaja mengirim request yang sama 2 kali (karena 
 ┃    jaringan ngelag/tombol diklik 2x), transaksi kedua akan ditolak karena 
 ┃    idempotencyKey-nya sudah tercatat di database.
 */
