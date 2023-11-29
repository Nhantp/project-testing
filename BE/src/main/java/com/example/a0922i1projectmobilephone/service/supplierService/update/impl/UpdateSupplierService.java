package com.example.a0922i1projectmobilephone.service.supplierService.update.impl;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import com.example.a0922i1projectmobilephone.entity.Supplier;
import com.example.a0922i1projectmobilephone.repository.supplierRepository.update.IUpdateSupplierRepository;
import com.example.a0922i1projectmobilephone.repository.supplierRepository.update.impl.UpdateSupplierRepository;
import com.example.a0922i1projectmobilephone.service.supplierService.update.IUpdateSupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UpdateSupplierService implements IUpdateSupplierService {
    @Autowired
    IUpdateSupplierRepository iUpdateSupplierRepository;
    @Autowired
    UpdateSupplierRepository updateSupplierRepository;

    @Override
    public Supplier findById(int id) {
        return iUpdateSupplierRepository.findById(id);
    }

    @Override
    public SupplierDtoCreateUpdate updateSupplier(SupplierDtoCreateUpdate supplier) {
        updateSupplierRepository.updateSupplier(supplier.getSupplierAddress(), supplier.getSupplierEmail(), supplier.getSupplierName(), supplier.getSupplierPhone(), supplier.getSupplierId());
        return supplier;
    }

    public SupplierDtoCreateUpdate checkData(SupplierDtoCreateUpdate supplier) {
        List<String> checkData = new ArrayList<>();
        checkData.add(updateSupplierRepository.findByName(supplier.getSupplierName(), supplier.getSupplierId()));
        checkData.add(updateSupplierRepository.findByPhone(supplier.getSupplierPhone(), supplier.getSupplierId()));
        checkData.add(updateSupplierRepository.findByEmail(supplier.getSupplierEmail(), supplier.getSupplierId()));

        if (supplier.getSupplierName().equals(checkData.get(0))){
            supplier.setSupplierName("errorNameData");
        }if (supplier.getSupplierPhone().equals(checkData.get(1))){
            supplier.setSupplierPhone("errorPhoneData");
        }if (supplier.getSupplierEmail().equals(checkData.get(2))){
            supplier.setSupplierEmail("errorEmailData");
        }return supplier;
    }
}
