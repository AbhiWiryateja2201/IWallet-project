// model: representasi bentuk tabel database ke dalam kode Java. File Wallet.java: Tabel wallet
package com.IWallet.iwallet.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data // (Lombok) Membuat getter, setter, dll otomatis
@Entity // (JPA) Menandai class ini sebagai entitas atau tabel database
@Table(name = "wallets") // (JPA) Menentukan nama tabel di database secara spesifik, yaitu "wallets"
public class Wallet {

    @Id // (JPA) Menandakan bahwa variabel di bawahnya adalah Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // (JPA) Menjadikan Primary Key sebagai Auto Increment
    @Column(name = "wallet_id")
    private Long walletId;

    @Column(name = "wallet_number", unique = true)
    private String walletNumber;

    @Column(name = "public_id", unique = true, nullable = false, updatable = false)
    private String publicId;

    @Column(name = "balance", precision = 19, scale = 4, nullable = false)
    private BigDecimal balance;

    @Column(name = "status")
    private String status;

    /* 
    @JoinColumn(...): pengaturan Foreign Key.
    name = "user_id": nama kolom di tabel "wallets" yang akan menyimpan "ID dari User"
    referencedColumnName = "user_id": Merujuk secara spesifik ke kolom "user_id" di "tabel users"
    @OneToOne: relasi "Satu-ke-Satu". Satu entitas Wallet hanya dimiliki oleh satu entitas User
    */

    @OneToOne // (JPA) Mendefinisikan relasi Satu-ke-Satu. Satu dompet hanya milik satu pengguna.
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false) // (JPA) Mengatur kolom yang menjadi Foreign Key.
    private User user; //call whole user object instead of
    //  a singular ID element.

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.publicId = UUID.randomUUID().toString();
    }

}

/*
 ┃ File: Wallet.java
 ┃ Layer: Model / Entity
 ┃
 ┃ Penjelasan:
 ┃ File ini merepresentasikan tabel "wallets" (dompet digital) di dalam database.
 ┃ Setiap kali seorang User berhasil mendaftar, sistem akan membuatkan satu buah
 ┃ dompet untuknya menggunakan struktur dari class ini.
 ┃
 ┃ Poin Penting:
 ┃ 1. Relasi One-to-One: Anotasi @OneToOne dan @JoinColumn di atas properti 'user'
 ┃    menunjukkan bahwa sebuah dompet (Wallet) memiliki hubungan kepemilikan 
 ┃    mutlak dengan seorang Pengguna (User). Kolom "user_id" akan menjadi 
 ┃    Foreign Key (kunci tamu) yang merujuk ke tabel users.
 ┃ 2. Tipe Data Uang: Saldo (balance) menggunakan tipe data BigDecimal, bukan 
 ┃    Double atau Float. Ini adalah standar baku dalam aplikasi finansial untuk 
 ┃    menghindari kesalahan pembulatan angka desimal (precision loss).
 */