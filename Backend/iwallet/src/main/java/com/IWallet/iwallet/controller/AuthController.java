package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.LoginResponseDTO;
import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.dto.UserRegisterRequestDTO;
import com.IWallet.iwallet.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import jakarta.validation.Valid;

@RestController // Menandakan bahwa class ini adalah API Controller yang mereturn JSON
@RequestMapping("/api/auth") // Menentukan URL dasar untuk semua route di dalam class ini
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"}) // Mengizinkan akses dari frontend (CORS)
@RequiredArgsConstructor // Membuat constructor otomatis untuk dependency injection (Lombok)

public class AuthController {

    private final AuthService authService;

    @PostMapping("/register") // Menerima request HTTP POST di path /register
    public ResponseEntity<?> register(@Valid @RequestBody UserRegisterRequestDTO requestDTO) { // Anotasi otomatis mengubah JSON request menjadi object DTO
        // Gunakan DTO, bukan Entity User
        UserResponseDTO registeredUser = authService.register(requestDTO);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login") // Menerima request HTTP POST di path /login untuk autentikasi
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");
        LoginResponseDTO loginResponse = authService.login(email, password);
        return ResponseEntity.ok(loginResponse);
    }
}

/*
 ┃ AuthController
 ┃
 ┃ Class ini bertanggung jawab untuk menangani proses autentikasi pengguna,
 ┃ yaitu registrasi akun baru dan login ke dalam sistem.
 ┃
 ┃ Cara Kerja:
 ┃ 1. Register:
 ┃    - Menerima request berupa data pendaftaran pengguna.
 ┃    - Meneruskan data tersebut ke AuthService untuk divalidasi dan disimpan.
 ┃    - Mengembalikan data pengguna yang berhasil didaftarkan tanpa menyertakan password.
 ┃ 2. Login:
 ┃    - Menerima request berisi email dan password.
 ┃    - Meneruskan kredensial ke AuthService untuk memverifikasi kebenarannya.
 ┃    - Jika sukses, akan menghasilkan dan mengembalikan token JWT yang akan 
 ┃      digunakan pengguna untuk mengakses API lain yang terproteksi.
 */