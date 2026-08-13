package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/wallet")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class DashboardController {

    private final WalletRepository walletRepository;

    @GetMapping("/balance")
    public ResponseEntity<?> getBalance(Principal principal) {
        String userPublicId = principal.getName();
        
        Wallet wallet = walletRepository.findByUser_PublicId(userPublicId)
                .orElseThrow(() -> new RuntimeException("Dompet tidak ditemukan."));
        
        Map<String, Object> response = new HashMap<>();
        response.put("balance", wallet.getBalance());
        response.put("walletNumber", wallet.getWalletNumber());
        
        return ResponseEntity.ok(response);
    }
}