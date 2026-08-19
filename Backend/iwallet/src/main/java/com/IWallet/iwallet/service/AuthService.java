// Package service: aturan bisnis
package com.IWallet.iwallet.service;

import com.IWallet.iwallet.dto.LoginResponseDTO;
import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.dto.UserRegisterRequestDTO;
import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.model.Wallet;
import com.IWallet.iwallet.repository.UserRepository;
import com.IWallet.iwallet.repository.WalletRepository;
import com.IWallet.iwallet.security.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.UUID;

@Service 
@RequiredArgsConstructor 
public class AuthService {

    /* ATRIBUT */  
    private final UserRepository userRepository;
    private final WalletRepository walletRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    /******************* METHOD *******************/
    @Transactional(rollbackFor = Exception.class)
    public UserResponseDTO register(UserRegisterRequestDTO dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email sudah terdaftar!");
        }

        User user = new User();
        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setPin(passwordEncoder.encode(dto.getPin()));
        user.setStatus("ACTIVE");
        
        User savedUser = userRepository.save(user);

        Wallet wallet = new Wallet();
        wallet.setUser(savedUser);
        wallet.setWalletNumber("WAL-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        wallet.setBalance(BigDecimal.ZERO);
        wallet.setStatus("ACTIVE");
        walletRepository.save(wallet);

        return mapToDTO(savedUser);
    }

    public LoginResponseDTO login(String email, String password) {
            User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email atau Password salah!"));

            if (!passwordEncoder.matches(password, user.getPassword())) {
                throw new RuntimeException("Email atau Password salah!");
            }
            
            String token = jwtUtil.generateToken(user.getPublicId());
            return new LoginResponseDTO(token, mapToDTO(user));
        }

    @Transactional
    public void deleteUser(String publicId, String password) {
        User user = userRepository.findByPublicId(publicId)
            .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Password salah!");
        }
        user.setStatus("INACTIVE");
        userRepository.save(user); //soft delete
    }

    @Transactional
    public void changePin(String publicId, String oldPin, String newPin) {
        User user = userRepository.findByPublicId(publicId)
            .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));
        if (!passwordEncoder.matches(oldPin, user.getPin())) {
            throw new RuntimeException("PIN lama salah!");
        }
        if (newPin.length() != 6) {
            throw new RuntimeException("PIN baru harus 6 digit!");
        }
        user.setPin(passwordEncoder.encode(newPin));
        userRepository.save(user);
    }

    @Transactional
    public void changePassword(String publicId, String oldPassword, String newPassword) {
        User user = userRepository.findByPublicId(publicId)
            .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new RuntimeException("Password lama salah!");
        }
        if (newPassword.length() < 6) {
            throw new RuntimeException("Password baru minimal 6 karakter!");
        }
        user.setPassword(passwordEncoder.encode(newPassword));
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