package com.IWallet.iwallet.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class TransactionHistoryDTO {
    private String transactionId;
    private String type;
    private BigDecimal amount;
    private String merchantName;
    private String status;
    private LocalDateTime createdAt;
}
