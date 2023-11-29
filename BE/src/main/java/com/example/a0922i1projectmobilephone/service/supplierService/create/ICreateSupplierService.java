package com.example.a0922i1projectmobilephone.service.supplierService.create;


import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;

public interface ICreateSupplierService {
    SupplierDtoCreateUpdate addNewSupplier(SupplierDtoCreateUpdate supplier);
    SupplierDtoCreateUpdate checkData(SupplierDtoCreateUpdate supplier);
}
