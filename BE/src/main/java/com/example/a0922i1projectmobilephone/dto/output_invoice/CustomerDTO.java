package com.example.a0922i1projectmobilephone.dto.output_invoice;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CustomerDTO {
    private Integer customerId;
    @NotBlank(message = "Tên khách hàng ko được để trống")
    private String customerName;
    @NotBlank(message = "Số điện thoại ko được để trống")
    @Pattern(regexp = "^(0[0-9]{9,10}|84[0-9]{9})$", message = "Sai định dạng số điện thoại")
    private String customerPhone;
    @NotBlank(message = "Địa chỉ ko được để trống")
    private String customerAddress;
    @NotBlank(message = "Email ko được để trống")
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$", message = "Sai định dạng email")
    private String customerEmail;
    private List<OutputInvoiceDTO> outputInvoices;
}
