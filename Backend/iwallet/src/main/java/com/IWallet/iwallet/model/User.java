// model: representasi bentuk tabel database ke dalam kode Java. File User.java: Tabel user
package com.IWallet.iwallet.model; //Klasifikasi package, kode ini masuk ke package model.

//Libraries yang diperlukan
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;
import java.util.UUID;

@Data 
@Entity
@Table(name = "users") 
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id") 
    private Long userId;

    @Column(name = "public_id", updatable = false, nullable = false, unique = true)
    private String publicId;

    @Column(name = "full_name", nullable = false) //nullable false: NOT NULL

    private String fullName;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "phone_number", unique = true, nullable = false)
    private String phoneNumber;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "pin", nullable = false)
    private String pin;

    @Column(name = "status", nullable = false)
    private String status;

    @CreationTimestamp 
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp 
    private LocalDateTime updatedAt;
    
    @PrePersist 
    protected void onCreate() {
    this.publicId = UUID.randomUUID().toString();
    }
}