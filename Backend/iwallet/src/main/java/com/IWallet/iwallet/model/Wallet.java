// model: representasi bentuk tabel database ke dalam kode Java. File Wallet.java: Tabel wallet
package com.IWallet.iwallet.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity 
@Table(name = "wallets") 
public class Wallet {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @OneToOne 
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
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