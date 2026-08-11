package com.IWallet.iwallet.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class TransactionHistoryDTO {
    private String transactionId; //publicId
    private String type;          //TOP_UP or PAYMENT
    private BigDecimal amount;
    private String merchantName;  //nullable
    private String status;
    private LocalDateTime createdAt;
}
