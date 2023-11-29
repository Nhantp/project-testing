package com.example.a0922i1projectmobilephone.dto.supplier;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;
import java.util.Objects;


@Getter
@Setter

public class SupplierDtoCreateUpdate {
    private Integer supplierId;
    private String supplierName;
    private String supplierPhone;
    private String supplierEmail;
    private String supplierAddress;

    public SupplierDtoCreateUpdate() {
    }

    public SupplierDtoCreateUpdate(int supplierId, String supplierName, String supplierPhone, String supplierEmail, String supplierAddress) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.supplierPhone = supplierPhone;
        this.supplierEmail = supplierEmail;
        this.supplierAddress = supplierAddress;
    }
    public SupplierDtoCreateUpdate( String supplierName, String supplierPhone, String supplierEmail, String supplierAddress) {

        this.supplierName = supplierName;
        this.supplierPhone = supplierPhone;
        this.supplierEmail = supplierEmail;
        this.supplierAddress = supplierAddress;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SupplierDtoCreateUpdate that = (SupplierDtoCreateUpdate) o;
        return Objects.equals(supplierId, that.supplierId) && Objects.equals(supplierName, that.supplierName) && Objects.equals(supplierPhone, that.supplierPhone) && Objects.equals(supplierEmail, that.supplierEmail) && Objects.equals(supplierAddress, that.supplierAddress);
    }


}
