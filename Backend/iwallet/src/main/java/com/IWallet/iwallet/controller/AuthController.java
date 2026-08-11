package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.LoginResponseDTO;
import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.dto.UserRegisterRequestDTO;
import com.IWallet.iwallet.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import jakarta.validation.Valid;

@RestController 
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"}) 
@RequiredArgsConstructor

public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserRegisterRequestDTO requestDTO) {
        UserResponseDTO registeredUser = authService.register(requestDTO);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");
        LoginResponseDTO loginResponse = authService.login(email, password);
        return ResponseEntity.ok(loginResponse);
    }
}