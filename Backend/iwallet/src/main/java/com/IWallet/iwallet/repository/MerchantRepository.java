package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MerchantRepository extends JpaRepository<Merchant, Long> { // (Spring Data JPA) Menyediakan operasi CRUD standar untuk tabel Merchant.
    Optional<Merchant> findByPublicId(String publicId);
}

/*
 ┃ File: MerchantRepository.java
 ┃ Layer: Repository
 ┃
 ┃ Penjelasan:
 ┃ Repository yang bertugas mengurus interaksi database untuk data toko (Merchant).
 ┃ Sama seperti repository lainnya, interface ini memanfaatkan keajaiban
 ┃ Spring Data JPA untuk menghilangkan kebutuhan menulis query SQL manual.
 */
