package com.IWallet.iwallet.dto;
import lombok.Data;
import jakarta.validation.constraints.*;

@Data // (Lombok) Otomatis meng-generate getter, setter, dll.
public class UserRegisterRequestDTO {
    // Hanya izinkan data ini yang masuk dari Frontend
    
    @NotBlank(message = "Nama tidak boleh kosong") // (Jakarta Validation) Memastikan string tidak null dan tidak kosong.
    private String fullName;
    
    @NotBlank(message = "Email tidak boleh kosong")
    @Email(message = "Format email tidak valid") // (Jakarta Validation) Memastikan format penulisan sesuai dengan standar alamat email.
    private String email;
    
    @NotBlank(message = "Nomor HP tidak boleh kosong")
    private String phoneNumber;
    
    @NotBlank(message = "Password tidak boleh kosong")
    @Size(min = 6, message = "Password minimal 6 karakter") // (Jakarta Validation) Memastikan panjang karakter memenuhi batas minimal.
    private String password;
    
    @NotBlank(message = "PIN tidak boleh kosong")
    @Size(min = 6, max = 6, message = "PIN harus 6 digit")
    private String pin;
}

/*
 ┃ File: UserRegisterRequestDTO.java
 ┃ Layer: DTO (Data Transfer Object)
 ┃
 ┃ Penjelasan:
 ┃ DTO adalah objek khusus yang bertugas sebagai "kurir" data antara Frontend 
 ┃ (Klien) dan Backend (Server).
 ┃
 ┃ Kenapa tidak pakai class Model (User.java) langsung?
 ┃ 1. Keamanan: Kita tidak ingin Frontend mengirim data yang tidak semestinya 
 ┃    (misalnya `{"saldo": 1000000}`) dan langsung masuk ke database.
 ┃ 2. Validasi: Di DTO, kita memasang penjaga (anotasi validasi) seperti @NotBlank. 
 ┃    Jika frontend mengirim data yang salah, request akan langsung ditolak sebelum 
 ┃    masuk ke logika sistem.
 ┃
 ┃ Singkatnya, DTO adalah satpam pemeriksa barang bawaan sebelum request diizinkan 
 ┃ masuk ke dalam rumah (sistem) kita.
 */