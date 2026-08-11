package com.IWallet.iwallet.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data 
@Entity
@Table(name = "merchants") 
public class Merchant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
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