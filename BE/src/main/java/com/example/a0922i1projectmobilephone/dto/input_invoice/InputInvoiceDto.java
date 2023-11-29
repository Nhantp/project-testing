package com.example.a0922i1projectmobilephone.dto.input_invoice;

public class InputInvoiceDto {

   private ProductInputDto[] productInputDto;
    private SupplierIdDto supplier;

    public InputInvoiceDto(ProductInputDto[] productInputDto, SupplierIdDto supplier) {
        this.productInputDto = productInputDto;
        this.supplier = supplier;
    }

    public InputInvoiceDto() {
    }

    public ProductInputDto[] getProductInputDto() {
        return productInputDto;
    }

    public void setProductInputDto(ProductInputDto[] productInputDto) {
        this.productInputDto = productInputDto;
    }

    public SupplierIdDto getSupplier() {
        return supplier;
    }

    public void setSupplier(SupplierIdDto supplier) {
        this.supplier = supplier;
    }
}
