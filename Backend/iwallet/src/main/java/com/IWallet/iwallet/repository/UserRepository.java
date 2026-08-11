// repository: "asisten koki" yang mengambil bahan dari DB
package com.IWallet.iwallet.repository;

import com.IWallet.iwallet.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

/*
findByEmail: fungsi dari JpaRepository: alias for "SELECT * FROM users WHERE email = x"
existByEmail: fungsi dari JpaRepository: TRUE if email sudah ada di database, else FALSE
*/

public interface UserRepository extends JpaRepository<User, Long> { // (Spring Data JPA) Menurunkan semua fungsi database (save, findById, delete, dll) khusus untuk entitas User dengan tipe Primary Key Long.
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByPublicId(String publicId);
}

/*
 ┃ File: UserRepository.java
 ┃ Layer: Repository
 ┃
 ┃ Penjelasan:
 ┃ Repository adalah jembatan komunikasi antara aplikasi Java kita dengan database.
 ┃ Bayangkan jika Model (User.java) adalah bentuk "barang"-nya, maka Repository 
 ┃ adalah "gudang"-nya tempat kita mengambil dan menyimpan barang tersebut.
 ┃
 ┃ Kehebatan Spring Data JPA:
 ┃ Kita tidak perlu menulis query SQL manual (seperti SELECT * FROM users). 
 ┃ Cukup dengan mewarisi JpaRepository, Spring otomatis membuatkan fungsi-fungsi
 ┃ dasar seperti save(), findAll(), findById(), delete().
 ┃
 ┃ Magic Method (Query Method):
 ┃ Hebatnya lagi, kita bisa membuat fungsi kustom hanya dengan menamainya sesuai 
 ┃ aturan. Contohnya: `findByEmail(String email)`. Spring akan otomatis 
 ┃ menerjemahkannya menjadi query SQL `SELECT * FROM users WHERE email = ?`.
 */