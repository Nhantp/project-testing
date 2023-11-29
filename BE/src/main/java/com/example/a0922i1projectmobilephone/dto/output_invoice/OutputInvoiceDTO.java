package com.example.a0922i1projectmobilephone.dto.output_invoice;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OutputInvoiceDTO {
    private Integer outputInvoiceId;
    private String paymentMethod;
    private Integer totalPrice;
    private LocalDateTime dateOutputInvoice;
    private CustomerDTO customerDTO;
    private List<OutputInvoiceDetailDTO> outputInvoiceDetails;
}
