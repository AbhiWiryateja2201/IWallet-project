package com.IWallet.iwallet.service;

import com.IWallet.iwallet.dto.TransactionHistoryDTO;
import com.IWallet.iwallet.model.Transaction;
import com.IWallet.iwallet.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service // Memberi tahu Spring Boot bahwa kelas ini adalah Service Layer
@RequiredArgsConstructor // Lombok: Injeksi dependensi otomatis
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public List<TransactionHistoryDTO> getTransactionHistory(String userPublicId) {
        List<Transaction> transactions = transactionRepository.findByWallet_User_PublicIdOrderByCreatedAtDesc(userPublicId);
        
        return transactions.stream().map(tx -> TransactionHistoryDTO.builder()
                .transactionId(tx.getPublicId())
                .type(tx.getTransactionType())
                .amount(tx.getAmount())
                .merchantName(tx.getMerchant() != null ? tx.getMerchant().getMerchantName() : null)
                .status(tx.getStatus())
                .createdAt(tx.getCreatedAt())
                .build()
        ).collect(Collectors.toList());
    }
}

/*
 ┃ @Service:
 ┃ Penanda bahwa kelas TransactionService ini memegang tanggung jawab bisnis
 ┃ khusus untuk mengelola atau mengambil data riwayat transaksi pengguna.
 */
