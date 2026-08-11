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
        // principal.getName() diisi "sub" dari JWT: publicId user
        String userPublicId = principal.getName(); 
        
        TransactionResponseDTO response = topUpService.executeTopUp(userPublicId, request, idempotencyKey);
        return ResponseEntity.ok(response);
    }
}