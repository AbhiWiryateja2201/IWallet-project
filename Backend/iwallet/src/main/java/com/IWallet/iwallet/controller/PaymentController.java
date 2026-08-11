package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.PaymentRequestDTO;
import com.IWallet.iwallet.dto.TransactionResponseDTO;
import com.IWallet.iwallet.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController // Menandakan class ini adalah controller REST API yang merespon dengan format JSON
@RequestMapping("/api/payment") // Menentukan prefix URL untuk semua endpoint di class ini
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"}) // Mengizinkan domain frontend mengakses API ini
@RequiredArgsConstructor // Lombok membuatkan constructor untuk dependency injection (PaymentService)
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/pay") // Menandakan endpoint ini melayani request HTTP POST untuk path /pay
    public ResponseEntity<?> pay(
            @RequestBody PaymentRequestDTO request,
            @RequestHeader("Idempotency-Key") String idempotencyKey,
            Principal principal
    ) {
        String userPublicId = principal.getName();
        TransactionResponseDTO response = paymentService.executePayment(userPublicId, request, idempotencyKey);
        return ResponseEntity.ok(response);
    }
}

/*
 ┃ PaymentController
 ┃
 ┃ Class ini bertugas untuk menangani transaksi pembayaran atau transfer 
 ┃ dari satu pengguna (pengirim) ke tujuan lain.
 ┃
 ┃ Cara Kerja:
 ┃ 1. Menerima Request:
 ┃    - Endpoint menerima detail pembayaran (PaymentRequestDTO).
 ┃    - Membutuhkan header `Idempotency-Key` untuk mencegah duplikasi transaksi 
 ┃      (misalnya karena double-click dari sisi frontend).
 ┃    - Menggunakan `Principal` untuk mendapatkan Public ID pengguna yang sedang 
 ┃      login (sebagai pengirim uang).
 ┃ 2. Eksekusi Pembayaran:
 ┃    - Data pengirim, detail request, dan kunci idempotensi dikirimkan ke 
 ┃      PaymentService.
 ┃    - Service akan melakukan validasi saldo, pemotongan dana, dan mencatat riwayat.
 ┃ 3. Mengembalikan Hasil:
 ┃    - Jika berhasil, mengembalikan respons berisi detail transaksi pembayaran 
 ┃      yang sukses dilakukan.
 */
