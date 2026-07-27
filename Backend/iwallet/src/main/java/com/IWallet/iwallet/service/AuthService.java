// Package service: aturan bisnis
package com.IWallet.iwallet.service;

import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.UserRepository;
import com.IWallet.iwallet.repository.WalletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;

@Service //same as Entity, this one declares that this file handle business logic
public class AuthService {

    /* ATRIBUT */  

    //Autowired : dependency injection, uses Repositorypkg files, no need to create object manually.
    @Autowired 
    private UserRepository userRepository;
    
    @Autowired
    private WalletRepository walletRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
    /******************* METHOD *******************/
    public UserResponseDTO register(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email sudah terdaftar!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setPin(passwordEncoder.encode(user.getPin()));
        user.setStatus("ACTIVE");
        User savedUser = userRepository.save(user);

        // assign Wallet saat user baru mendaftar, one to one
        Wallet wallet = new Wallet();
        wallet.setUser(savedUser);
        wallet.setWalletNumber("WAL-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        wallet.setBalance(BigDecimal.ZERO);
        wallet.setStatus("ACTIVE");
        walletRepository.save(wallet);

        return mapToDTO(savedUser);
    }

    public UserResponseDTO login(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return mapToDTO(user);
            }
        }
        throw new RuntimeException("Email atau Password salah!");
    }

    public void deleteUser(String publicId) {
        User user = userRepository.findAll().stream()
                .filter(existingUser -> publicId.equals(existingUser.getPublicId()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));

        user.setStatus("INACTIVE");
        userRepository.save(user);
    }

    private UserResponseDTO mapToDTO(User user) {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setPublicId(user.getPublicId());
        dto.setFullName(user.getFullName());
        dto.setEmail(user.getEmail());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setStatus(user.getStatus());
        return dto;
    }
}