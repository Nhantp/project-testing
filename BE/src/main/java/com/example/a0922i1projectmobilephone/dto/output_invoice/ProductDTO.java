package com.example.a0922i1projectmobilephone.dto.output_invoice;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Integer productId;
    private Integer sellingPrice;
    private Integer quantity;
    private List<OutputInvoiceDetailDTO> outputInvoiceDetails;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(Integer sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public List<OutputInvoiceDetailDTO> getOutputInvoiceDetails() {
        return outputInvoiceDetails;
    }

    public void setOutputInvoiceDetails(List<OutputInvoiceDetailDTO> outputInvoiceDetails) {
        this.outputInvoiceDetails = outputInvoiceDetails;
    }
}
