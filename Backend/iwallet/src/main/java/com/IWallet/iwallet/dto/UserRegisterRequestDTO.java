package com.IWallet.iwallet.dto;
import lombok.Data;
import jakarta.validation.constraints.*;

@Data
public class UserRegisterRequestDTO {
    
    @NotBlank(message = "Nama tidak boleh kosong")
    private String fullName;
    
    @NotBlank(message = "Email tidak boleh kosong")
    @Email(message = "Format email tidak valid") 
    private String email;
    
    @NotBlank(message = "Nomor HP tidak boleh kosong")
    private String phoneNumber;
    
    @NotBlank(message = "Password tidak boleh kosong")
    @Size(min = 6, message = "Password minimal 6 karakter") 
    private String password;
    
    @NotBlank(message = "PIN tidak boleh kosong")
    @Size(min = 6, max = 6, message = "PIN harus 6 digit")
    private String pin;
}