// Package service: aturan bisnis
package com.IWallet.iwallet.service;

import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.UserRepository;
import com.IWallet.iwallet.repository.WalletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;

@Service //same as Entity, this one declares that this file handle business logic
public class AuthService {

    /******************* ATRIBUT *******************/

    @Autowired //Autowired : dependency injection, uses Repositorypkg files, no need to create object manually.
    private UserRepository userRepository;
    
    @Autowired
    private WalletRepository walletRepository;
    
    /******************* METHOD *******************/
    public User register(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email sudah terdaftar!");
        }

        user.setStatus("ACTIVE");
        User savedUser = userRepository.save(user);

        // assign Wallet saat user baru mendaftar, one to one
        Wallet wallet = new Wallet();
        wallet.setUser(savedUser);
        wallet.setWalletNumber("WAL-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        wallet.setBalance(BigDecimal.ZERO);
        wallet.setStatus("ACTIVE");
        walletRepository.save(wallet);

        return savedUser;
    }

    public User login(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(password)) { // Catatan: Nanti bisa ditambah BCrypt Hashing
                return user;
            }
        }
        throw new RuntimeException("Email atau Password salah!");
    }
}