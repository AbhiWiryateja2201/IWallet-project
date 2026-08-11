package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Wallet;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    Optional<Wallet> findByUser_UserId(Long userId);
    Optional<Wallet> findByUser_PublicId(String userPublicId);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT w FROM Wallet w WHERE w.user.publicId = :userPublicId")
    Optional<Wallet> findByUserPublicIdForUpdate(@Param("userPublicId") String userPublicId);
}