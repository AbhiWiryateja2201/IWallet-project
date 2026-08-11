package com.IWallet.iwallet.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @Column(name = "public_id", unique = true, nullable = false, updatable = false)
    private String publicId;

    @ManyToOne 
    @JoinColumn(name = "wallet_id", referencedColumnName = "wallet_id", nullable = false)
    private Wallet wallet;

    @ManyToOne 
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