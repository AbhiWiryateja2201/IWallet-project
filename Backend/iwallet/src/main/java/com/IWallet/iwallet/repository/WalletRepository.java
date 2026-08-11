package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.Wallet;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    Optional<Wallet> findByUser_UserId(Long userId); //Cari di tabel dompet, masuk ke relasi User, lalu cari berdasarkan userId-nya
    Optional<Wallet> findByUser_PublicId(String userPublicId);

    @Lock(LockModeType.PESSIMISTIC_WRITE) // (JPA) Mengunci baris data di database secara pesimis agar tidak diubah proses lain bersamaan (mencegah Race Condition).
    @Query("SELECT w FROM Wallet w WHERE w.user.publicId = :userPublicId") // (JPA/Hibernate) Menulis query kustom menggunakan JPQL (Java Persistence Query Language).
    Optional<Wallet> findByUserPublicIdForUpdate(@Param("userPublicId") String userPublicId);
}

/*
 ┃ File: WalletRepository.java
 ┃ Layer: Repository
 ┃
 ┃ Penjelasan:
 ┃ Repository khusus untuk berinteraksi dengan tabel dompet (wallets).
 ┃
 ┃ Poin Penting (Race Condition & Lock):
 ┃ Pada aplikasi e-wallet, masalah paling fatal adalah "Race Condition". Bayangkan 
 ┃ jika ada 2 request pengeluaran saldo datang bersamaan di milidetik yang sama. 
 ┃ Jika tidak dikunci, sistem bisa saja salah membaca saldo terakhir.
 ┃
 ┃ Untuk mencegahnya, kita menggunakan anotasi `@Lock(LockModeType.PESSIMISTIC_WRITE)`. 
 ┃ Saat satu request sedang memperbarui saldo dompet, baris data dompet tersebut 
 ┃ di database akan "dikunci". Request lain yang mencoba mengubah dompet yang sama 
 ┃ harus mengantri menunggu. Ini menjamin keamanan perhitungan saldo!
 */