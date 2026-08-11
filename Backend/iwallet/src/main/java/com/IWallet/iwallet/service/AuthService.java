// Package service: aturan bisnis
package com.IWallet.iwallet.service;

import com.IWallet.iwallet.dto.LoginResponseDTO;
import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.dto.UserRegisterRequestDTO;
import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.UserRepository;
import com.IWallet.iwallet.repository.WalletRepository;
import com.IWallet.iwallet.security.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.UUID;

@Service // Memberi tahu Spring Boot bahwa kelas ini adalah Service Layer yang menangani logika bisnis
@RequiredArgsConstructor // Lombok: Membuat constructor otomatis untuk injeksi dependensi (Dependency Injection) pada variabel final
public class AuthService {

    /* ATRIBUT */  
    private final UserRepository userRepository;
    private final WalletRepository walletRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    /******************* METHOD *******************/

    @Transactional(rollbackFor = Exception.class) // Memastikan semua operasi database sukses bersama atau gagal bersama (Rollback jika error)
    public UserResponseDTO register(UserRegisterRequestDTO dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email sudah terdaftar!");
        }

        User user = new User();
        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setPin(passwordEncoder.encode(dto.getPin()));
        user.setStatus("ACTIVE");
        
        User savedUser = userRepository.save(user);

        Wallet wallet = new Wallet();
        wallet.setUser(savedUser);
        wallet.setWalletNumber("WAL-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        wallet.setBalance(BigDecimal.ZERO);
        wallet.setStatus("ACTIVE");
        walletRepository.save(wallet);

        return mapToDTO(savedUser);
    }

    public LoginResponseDTO login(String email, String password) {
            User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email atau Password salah!"));

            if (!passwordEncoder.matches(password, user.getPassword())) {
                throw new RuntimeException("Email atau Password salah!");
            }
            
            String token = jwtUtil.generateToken(user.getPublicId());
            return new LoginResponseDTO(token, mapToDTO(user));
        }

    public void deleteUser(String publicId) {
            User user = userRepository.findByPublicId(publicId)
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));

            user.setStatus("INACTIVE");
            userRepository.save(user); //soft delete
        }

    private UserResponseDTO mapToDTO(User user) {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setPublicId(user.getPublicId());
        dto.setFullName(user.getFullName());
        dto.setEmail(user.getEmail());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setStatus(user.getStatus());
        return dto;
    }
}

/*
 ┃ @Service:
 ┃ Anotasi ini memberitahu Spring Boot bahwa kelas AuthService adalah bagian dari
 ┃ Service Layer. Tugas utamanya adalah memproses aturan bisnis aplikasi, bukan
 ┃ berurusan langsung dengan query database (tugas Repository) atau menerima
 ┃ request dari internet (tugas Controller).
 ┃
 ┃ @Transactional(rollbackFor = Exception.class):
 ┃ Fitur sangat penting dari Spring untuk menjaga integritas data (ACID). Pada
 ┃ fungsi register(), kita menyimpan data User dan Wallet ke database. Bayangkan
 ┃ jika User berhasil disimpan, tetapi tiba-tiba server mati sebelum Wallet
 ┃ disimpan. Database akan berantakan! Dengan @Transactional, Spring akan
 ┃ membungkus kedua proses tersebut dalam 1 transaksi. Jika salah satu gagal
 ┃ (Exception), semuanya akan dibatalkan (rollback).
 ┃
 ┃ BCryptPasswordEncoder:
 ┃ Password atau PIN pengguna pantang disimpan secara mentah (plain text) di
 ┃ database. BCrypt mengubah (hash) password menjadi string acak yang tidak
 ┃ bisa dikembalikan ke asalnya (one-way hashing) sehingga aman jika database
 ┃ bocor.
 */