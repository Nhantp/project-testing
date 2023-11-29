package com.example.a0922i1projectmobilephone.dto.input_invoice;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class ProductInputDto {
    private Integer productId;
    @NotBlank(message = "Tên Sản phẩm không được để trống nha fen")
    private String productName;
    @Min(value = 1, message = "Giá nhập không được âm và bằng 0 đâu")
    private Integer costPrice;
    @Min(value = 1, message = "Số lượng cũng vậy")
    private Integer quantity;

    public ProductInputDto() {
    }

    public ProductInputDto(Integer productId, String productName, Integer costPrice, Integer quantity) {
        this.productId = productId;
        this.productName = productName;
        this.costPrice = costPrice;
        this.quantity = quantity;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getCostPrice() {
        return costPrice;
    }

    public void setCostPrice(Integer costPrice) {
        this.costPrice = costPrice;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
