// model: representasi bentuk tabel database ke dalam kode Java. File User.java: Tabel user
package com.IWallet.iwallet.model; //Klasifikasi package, kode ini masuk ke package model.

//Libraries yang diperlukan
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;
import java.util.UUID;

@Data // (Lombok) Otomatis membuatkan getter, setter, toString, dan metode standar lainnya agar kode lebih ringkas.
@Entity // (JPA) Menandakan bahwa class ini adalah entitas atau representasi dari sebuah tabel di database.
@Table(name = "users") // (JPA) Menentukan nama tabel secara spesifik di dalam database, yaitu "users".
public class User {

    @Id // (JPA) Menandakan bahwa variabel di bawahnya adalah Primary Key (Kunci Utama) untuk tabel ini.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // (JPA) Mengatur agar nilai Primary Key dibuat otomatis oleh database (Auto Increment).
    @Column(name = "user_id") // (JPA) Mengaitkan properti ini dengan kolom bernama "user_id" di tabel.
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

    @CreationTimestamp // (Hibernate) Otomatis mencatat waktu saat baris data ini pertama kali dibuat di database.
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp // (Hibernate) Otomatis memperbarui waktu setiap kali ada perubahan/update pada baris data ini.
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist // (JPA) Menjalankan fungsi di bawahnya tepat sebelum data disimpan ke database untuk pertama kalinya.
    protected void onCreate() {
    this.publicId = UUID.randomUUID().toString();
    }

}

/*
 ┃ File: User.java
 ┃ Layer: Model / Entity
 ┃
 ┃ Penjelasan Singkat:
 ┃ File ini adalah "Cetak Biru" (Blueprint) dari data Pengguna (User) di dalam
 ┃ database kita. Bayangkan class ini sebagai sebuah formulir pendaftaran kosong.
 ┃ 
 ┃ Di dalam arsitektur aplikasi (khususnya menggunakan JPA/Hibernate), kelas Model
 ┃ berfungsi sebagai jembatan langsung (mapping) antara kode Java dengan tabel 
 ┃ di database relasional (SQL). Setiap objek yang diciptakan dari kelas ini 
 ┃ akan mewakili satu baris data (row) di dalam tabel "users".
 ┃
 ┃ Poin Penting:
 ┃ 1. Anotasi @Entity dan @Table adalah kunci yang memberitahu Spring Boot bahwa
 ┃    class ini terikat secara fisik dengan tabel di database.
 ┃ 2. Kita menggunakan dua jenis ID: 
 ┃    - userId (Primary Key asli database, disembunyikan dari luar).
 ┃    - publicId (UUID acak, yang akan diekspos ke frontend/API demi keamanan).
 ┃    Fungsi onCreate() dengan anotasi @PrePersist menjamin bahwa setiap entitas user
 ┃    baru akan langsung mendapatkan publicId secara otomatis sebelum disimpan.
 */