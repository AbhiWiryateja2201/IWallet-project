package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.TransactionHistoryDTO;
import com.IWallet.iwallet.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController // Mengatur agar class ini memproses HTTP request dan mengembalikan JSON
@RequestMapping("/api/transactions") // Menentukan root endpoint untuk controller ini
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"}) // Mengizinkan akses HTTP dari aplikasi frontend
@RequiredArgsConstructor // Lombok untuk injeksi dependensi otomatis via constructor
public class TransactionController {

    private final TransactionService transactionService;

    @GetMapping("/history") // Melayani request HTTP GET untuk path /history
    public ResponseEntity<List<TransactionHistoryDTO>> getHistory(Principal principal) {
        String userPublicId = principal.getName();
        List<TransactionHistoryDTO> history = transactionService.getTransactionHistory(userPublicId);
        return ResponseEntity.ok(history);
    }
}

/*
 ┃ TransactionController
 ┃
 ┃ Class ini bertanggung jawab untuk melayani permintaan terkait riwayat
 ┃ transaksi dari seorang pengguna e-wallet.
 ┃
 ┃ Cara Kerja:
 ┃ 1. Mengidentifikasi Pengguna:
 ┃    - Menggunakan objek `Principal` (yang otomatis disisipkan oleh Spring 
 ┃      Security) untuk mengetahui identitas pengguna yang sedang mengakses data.
 ┃ 2. Mengambil Riwayat:
 ┃    - Mengirim ID pengguna ke TransactionService untuk mencari semua 
 ┃      transaksi terkait akun tersebut.
 ┃ 3. Mengembalikan Data:
 ┃    - Mengirimkan daftar atau list riwayat transaksi (TransactionHistoryDTO) 
 ┃      ke frontend untuk ditampilkan di halaman riwayat/history.
 */
