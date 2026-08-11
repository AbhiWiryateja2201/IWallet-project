package com.IWallet.iwallet.dto;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class TopUpRequestDTO {
    //Frontend cuma mengirim nominal, identitas diambil dari JWT.
    private BigDecimal amount; 
}
