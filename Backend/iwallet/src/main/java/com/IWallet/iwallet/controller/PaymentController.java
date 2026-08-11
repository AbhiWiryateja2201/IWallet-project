package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.PaymentRequestDTO;
import com.IWallet.iwallet.dto.TransactionResponseDTO;
import com.IWallet.iwallet.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/pay")
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