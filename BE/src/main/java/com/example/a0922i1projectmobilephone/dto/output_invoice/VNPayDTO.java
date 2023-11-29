package com.example.a0922i1projectmobilephone.dto.output_invoice;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class VNPayDTO {
    String orderInfo;
    String paymentTime;
    String transactionId;
    String totalPrice;
}
