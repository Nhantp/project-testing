package com.example.a0922i1projectmobilephone.dto.output_invoice;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OutputInvoiceDetailDTO {
    private Integer outputInvoiceDetailId;
    @NotBlank(message = "Số lượng nhập vào ko được trống")
    @Min(value = 1, message = "Số lượng nhập vào ko được bé hơn 1")
    @Max(value = 99, message = "Số lượng nhập vào ko được lớn hơn 99")
    private int quantity;
    private int subTotal;
    private ProductDTO productDTO;
    private OutputInvoiceDTO outputInvoiceDTO;
}
