package com.IWallet.iwallet.dto;
import lombok.Data;

@Data
public class ChangePasswordRequestDTO {
    private String oldPassword;
    private String newPassword;
}