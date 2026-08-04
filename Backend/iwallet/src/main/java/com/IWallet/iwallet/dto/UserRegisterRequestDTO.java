package com.IWallet.iwallet.dto;
import lombok.Data;

@Data
public class UserRegisterRequestDTO {
    // Hanya izinkan data ini yang masuk dari Frontend
    private String fullName;
    private String email;
    private String phoneNumber;
    private String password;
    private String pin;
}