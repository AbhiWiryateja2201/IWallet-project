package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MerchantRepository extends JpaRepository<Merchant, Long> {
    Optional<Merchant> findByPublicId(String publicId);
}
