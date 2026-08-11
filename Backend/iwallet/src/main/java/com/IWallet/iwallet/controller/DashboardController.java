package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController // Menandakan class ini sebagai REST API yang mengembalikan response berupa data (JSON)
@RequestMapping("/api/wallet") // Base URL untuk seluruh endpoint dalam controller ini
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"}) // Membuka akses CORS agar frontend bisa memanggil API ini
@RequiredArgsConstructor // Meng-generate constructor dengan argumen untuk final field secara otomatis (Lombok)
public class DashboardController {

    private final WalletRepository walletRepository;

    @GetMapping("/balance") // Menerima request HTTP GET pada path /balance
    public ResponseEntity<?> getBalance(Principal principal) {
        String userPublicId = principal.getName();
        
        Wallet wallet = walletRepository.findByUser_PublicId(userPublicId)
                .orElseThrow(() -> new RuntimeException("Dompet tidak ditemukan!"));
        
        Map<String, Object> response = new HashMap<>();
        response.put("balance", wallet.getBalance());
        response.put("walletNumber", wallet.getWalletNumber());
        
        return ResponseEntity.ok(response);
    }
}

/*
 ┃ DashboardController
 ┃
 ┃ Class ini berfungsi sebagai penyedia data utama untuk halaman dashboard pengguna.
 ┃ Fokus utamanya saat ini adalah mengambil informasi saldo dan nomor dompet.
 ┃
 ┃ Cara Kerja:
 ┃ 1. Mengambil Identitas:
 ┃    - Melalui parameter `Principal`, controller mengambil ID unik pengguna (Public ID) 
 ┃      yang telah diekstrak dari token JWT saat proses autentikasi filter.
 ┃ 2. Mengambil Data Dompet:
 ┃    - ID pengguna digunakan untuk mencari data dompet (Wallet) di database 
 ┃      menggunakan WalletRepository.
 ┃    - Jika dompet tidak ditemukan, sistem akan membuang error.
 ┃ 3. Mengembalikan Response:
 ┃    - Mengemas data spesifik (saldo dan nomor dompet) ke dalam struktur Map 
 ┃      dan mengembalikannya ke frontend dalam format JSON.
 */
