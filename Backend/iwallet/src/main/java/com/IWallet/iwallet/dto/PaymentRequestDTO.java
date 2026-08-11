package com.IWallet.iwallet.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class PaymentRequestDTO {
    private String merchantPublicId;
    private BigDecimal amount;
    private String pin;
}
