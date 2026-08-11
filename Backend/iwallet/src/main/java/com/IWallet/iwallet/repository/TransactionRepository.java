package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    boolean existsByIdempotencyKey(String idempotencyKey);
    
    List<Transaction> findByWallet_User_PublicIdOrderByCreatedAtDesc(String userPublicId);
}