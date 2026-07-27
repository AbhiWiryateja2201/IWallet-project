// model: representasi bentuk tabel database ke dalam kode Java. File User.java: Tabel user
package com.IWallet.iwallet.model; //Klasifikasi package, kode ini masuk ke package model.

//Libraries yang diperlukan
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;
import java.util.UUID;

@Data //Getter, setter, etc. Annotations; penyingkatan kode
@Entity //Penentuan kelas Entitas
@Table(name = "users") //Map ke tabel di SQL DB "users"
public class User {

    @Id //var below this annotations become Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Other name for "Auto Increment"
    @Column(name = "user_id") //var below this annotations mapped to a  column named "user_id"
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
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
    this.publicId = UUID.randomUUID().toString();
    }

}