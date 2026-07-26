package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    Optional<Wallet> findByUser_UserId(Long userId); //Cari di tabel dompet, masuk ke relasi User, lalu cari berdasarkan userId-nya
}