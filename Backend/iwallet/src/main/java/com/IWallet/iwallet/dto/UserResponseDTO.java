package com.IWallet.iwallet.dto;

import lombok.Data;

@Data
public class UserResponseDTO {
    private String publicId;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String status;
}