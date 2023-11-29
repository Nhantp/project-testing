package com.example.a0922i1projectmobilephone.service.supplierService.update;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import com.example.a0922i1projectmobilephone.entity.Supplier;

public interface IUpdateSupplierService {
    Supplier findById(int id);
    SupplierDtoCreateUpdate updateSupplier(SupplierDtoCreateUpdate supplier);
    SupplierDtoCreateUpdate checkData(SupplierDtoCreateUpdate supplier);

}
