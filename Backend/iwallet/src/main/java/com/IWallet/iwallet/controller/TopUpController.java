package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.TopUpRequestDTO;
import com.IWallet.iwallet.dto.TransactionResponseDTO;
import com.IWallet.iwallet.service.TopUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/topup")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class TopUpController {

    private final TopUpService topUpService;

    @PostMapping
    public ResponseEntity<?> topUp(
            @RequestBody TopUpRequestDTO request,
            @RequestHeader("Idempotency-Key") String idempotencyKey, //Memaksa frontend mengirim header ini
            Principal principal //principal: interface representasi identitas pengguna yang sedang login, otomatis keisi di jwt
    ) {
        // principal.getName() diisi "sub" dari JWT, yaitu publicId user
        String userPublicId = principal.getName(); 
        
        TransactionResponseDTO response = topUpService.executeTopUp(userPublicId, request, idempotencyKey);
        return ResponseEntity.ok(response);
    }
}

/*
(java.security.Principal) yang merepresentasikan identitas dari
 ┃   pengguna yang sedang login (terautentikasi).
 ┃
 ┃   Sederhananya: Principal itu adalah KTP virtual milik pengguna yang
 ┃   sedang mengakses sistemmu saat itu juga.
 ┃
 ┃   Dalam konteks kode backend yang baru saja kita buat, inilah yang
 ┃   terjadi dengan Principal:
 ┃
 ┃   1. Bagaimana dia dibuat?
 ┃   Saat ada request masuk membawa token JWT, JwtAuthenticationFilter
 ┃   kita akan membedah token tersebut, mengambil identitasnya (yaitu
 ┃   User Public ID), lalu memasukkannya ke dalam
 ┃   UsernamePasswordAuthenticationToken (yang merupakan turunan dari
 ┃   Principal). Identitas ini lalu disimpan sementara di memori server
 ┃   untuk request tersebut.
 ┃   2. Bagaimana dia digunakan?
 ┃   Di dalam Controller (misalnya saat Top-Up atau Payment), kita cukup
 ┃   menuliskan parameter Principal principal di dalam fungsinya. Spring
 ┃   Boot cukup pintar untuk otomatis mencari KTP virtual tersebut di
 ┃   memori dan memberikannya kepadamu.
 ┃   3. Kenapa ini sangat penting? (Keamanan/Anti-Hacker):
 ┃   Bayangkan kalau kita menyuruh Frontend mengirim userId lewat body
 ┃   JSON ({"userId": "123", "amount": 50000}). Hacker bisa dengan mudah
 ┃   mengubah JSON-nya menjadi {"userId": "456"} dan menguras dompet
 ┃   orang lain!Dengan menggunakan Principal, kita mengabaikan pengakuan
 ┃   dari JSON request. Kita memaksa sistem mengambil identitas murni8 
 ┃   dari Token JWT yang sudah divalidasi keasliannya dan tidak bisa
 ┃   dipalsukan.
 ┃   Makanya di kodemu kamu melihat baris ini:
 ┃   String userPublicId = principal.getName();
 ┃
 ┃   Artinya: "Jangan percaya JSON, ambil nama pengguna langsung dari
 ┃   KTP (Token JWT) resminya."
*/