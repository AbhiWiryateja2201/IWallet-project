package com.IWallet.iwallet.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data // (Lombok) Otomatis meng-generate getter, setter, dll.
@Entity // (JPA) Menandai class ini sebagai entitas tabel database.
@Table(name = "merchants") // (JPA) Menentukan nama tabel di database, yaitu "merchants".
public class Merchant {

    @Id // (JPA) Menandai kolom ini sebagai Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // (JPA) Menjadikan Primary Key sebagai Auto Increment
    @Column(name = "merchant_id")
    private Long merchantId;

    @Column(name = "public_id", unique = true, nullable = false, updatable = false)
    private String publicId;

    @Column(name = "merchant_name", nullable = false)
    private String merchantName;

    @Column(name = "qr_code", columnDefinition = "TEXT", nullable = false)
    private String qrCode;

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
 ┃ File: Merchant.java
 ┃ Layer: Model / Entity
 ┃
 ┃ Penjelasan:
 ┃ File ini adalah representasi dari entitas "Merchant" (pedagang/toko) di database.
 ┃ Jika aplikasi ini mendukung pembayaran menggunakan QR Code ke sebuah toko,
 ┃ data toko tersebut akan disimpan menggunakan struktur class ini.
 ┃
 ┃ Poin Penting:
 ┃ Sama seperti User dan Wallet, entitas Merchant juga memiliki 'publicId' berupa 
 ┃ UUID yang di-generate otomatis saat dibuat (@PrePersist). Ini bertujuan agar
 ┃ identitas asli merchant di database tidak diketahui publik. QR Code pada merchant
 ┃ juga dapat disimpan dalam format teks panjang (TEXT) sesuai dengan definisi kolomnya.
 */
