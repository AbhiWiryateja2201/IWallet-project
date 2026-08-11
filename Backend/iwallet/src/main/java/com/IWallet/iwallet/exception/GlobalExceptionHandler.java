package com.IWallet.iwallet.exception;

import com.IWallet.iwallet.dto.ErrorResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice // Membuat class ini sebagai pencegat (interceptor) global untuk exception di seluruh controller
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class) // Menangkap exception bertipe RuntimeException yang terjadi di aplikasi
    public ResponseEntity<ErrorResponseDTO> handleRuntimeException(RuntimeException ex) {
        ErrorResponseDTO errorResponse = new ErrorResponseDTO("error", ex.getMessage());
        return ResponseEntity.badRequest().body(errorResponse);
    }
    
    @ExceptionHandler(org.springframework.web.bind.MethodArgumentNotValidException.class) // Menangkap error validasi dari input request
    public ResponseEntity<ErrorResponseDTO> handleValidationException(org.springframework.web.bind.MethodArgumentNotValidException ex) {
        String errorMessage = ex.getBindingResult().getFieldErrors().stream()
                .map(error -> error.getDefaultMessage())
                .findFirst()
                .orElse("Validasi gagal");
        ErrorResponseDTO errorResponse = new ErrorResponseDTO("error", errorMessage);
        return ResponseEntity.badRequest().body(errorResponse);
    }
}

/*
 ┃ GlobalExceptionHandler
 ┃
 ┃ Class ini adalah semacam jaring pengaman (safety net) global untuk 
 ┃ menangani error (exception) yang terjadi di dalam aplikasi.
 ┃
 ┃ Cara Kerja:
 ┃ - Daripada setiap Controller harus menulis blok try-catch sendiri-sendiri,
 ┃   class ini akan otomatis "menangkap" error yang terlempar keluar dari Controller.
 ┃ - `@RestControllerAdvice` mengubah class ini menjadi penjaga global.
 ┃ - `@ExceptionHandler` menentukan jenis error apa yang mau ditangkap oleh 
 ┃   sebuah method.
 ┃
 ┃ Contoh Kasus:
 ┃ 1. Jika ada `RuntimeException` (misal: "Saldo tidak cukup"), ini akan ditangkap 
 ┃    dan diubah menjadi response JSON yang rapi (dengan status Bad Request / 400).
 ┃ 2. Jika ada error validasi input (misal: "Email harus diisi" akibat anotasi @Valid), 
 ┃    ini akan ditangkap, pesan error-nya diambil yang paling awal, lalu dikembalikan 
 ┃    sebagai JSON.
 ┃ Ini memastikan frontend selalu menerima format error yang terstruktur dan mudah 
 ┃ ditampilkan ke pengguna, bukan error log panjang dari server (yang bisa membocorkan 
 ┃ informasi sistem atau sekadar tidak dimengerti frontend).
 */
