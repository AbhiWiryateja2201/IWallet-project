package com.IWallet.iwallet.dto;
import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Builder // 
public class TransactionResponseDTO {
    private String transactionId; //public_id dari tabel transactions
    private BigDecimal currentBalance;
    private String status;
    private String message;
}
