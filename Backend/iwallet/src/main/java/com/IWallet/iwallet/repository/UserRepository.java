// repository: "asisten koki" yang mengambil bahan dari DB
package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

/*
findByEmail: fungsi dari JpaRepository: alias for "SELECT * FROM users WHERE email = x"
existByEmail: fungsi dari JpaRepository: TRUE if email sudah ada di database, else FALSE
*/

public interface UserRepository extends JpaRepository<User, Long> { //<User, Long> artinya "Ini repository untuk tabel User, dan tipe data Primary Key-nya adalah Long"
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByPublicId(String publicId);
}