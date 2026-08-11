package com.IWallet.iwallet.dto;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class TopUpRequestDTO {
    private BigDecimal amount; 
}
