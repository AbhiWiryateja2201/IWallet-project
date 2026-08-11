package com.IWallet.iwallet.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class PaymentRequestDTO {
    private String merchantPublicId; //dapat dari QR Statis
    private BigDecimal amount;       //nominal yang harus dibayar
    private String pin;              //PIN
}
