package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.TransactionHistoryDTO;
import com.IWallet.iwallet.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @GetMapping("/history")
    public ResponseEntity<List<TransactionHistoryDTO>> getHistory(Principal principal) {
        String userPublicId = principal.getName();
        List<TransactionHistoryDTO> history = transactionService.getTransactionHistory(userPublicId);
        return ResponseEntity.ok(history);
    }
}