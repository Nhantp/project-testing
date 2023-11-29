package com.example.a0922i1projectmobilephone.dto.input_invoice;


import lombok.Getter;

@Getter
public class SupplierIdDto {
    private int supplierId;
    private String supplierName;
    private String supplierPhone;
    private String supplierEmail;
    private String supplierAddress;

    public SupplierIdDto() {
    }

    public SupplierIdDto(int supplierId, String supplierName, String supplierPhone, String supplierEmail, String supplierAddress) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.supplierPhone = supplierPhone;
        this.supplierEmail = supplierEmail;
        this.supplierAddress = supplierAddress;
    }

    public void setSupplierId(int supplierId) {
        this.supplierId = supplierId;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public void setSupplierPhone(String supplierPhone) {
        this.supplierPhone = supplierPhone;
    }

    public void setSupplierEmail(String supplierEmail) {
        this.supplierEmail = supplierEmail;
    }

    public void setSupplierAddress(String supplierAddress) {
        this.supplierAddress = supplierAddress;
    }
}
