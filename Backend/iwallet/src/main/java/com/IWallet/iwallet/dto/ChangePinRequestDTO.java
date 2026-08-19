package com.IWallet.iwallet.dto;
import lombok.Data;

@Data
public class ChangePinRequestDTO {
    private String oldPin;
    private String newPin;
}