package com.example.a0922i1projectmobilephone.service.supplierService.create.impl;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import com.example.a0922i1projectmobilephone.entity.Supplier;
import com.example.a0922i1projectmobilephone.repository.supplierRepository.create.ICreateSupplierRepository;
import com.example.a0922i1projectmobilephone.repository.supplierRepository.create.impl.CreateSupplierRepository;
import com.example.a0922i1projectmobilephone.service.supplierService.create.ICreateSupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CreateSupplierService implements ICreateSupplierService {
    @Autowired
    CreateSupplierRepository createSupplierRepository;
    @Autowired
    ICreateSupplierRepository icreateSupplierRepository;

    @Override
    public SupplierDtoCreateUpdate addNewSupplier(SupplierDtoCreateUpdate supplier) {
         createSupplierRepository.addNewSupplier(supplier.getSupplierAddress(), supplier.getSupplierEmail(), supplier.getSupplierName(), supplier.getSupplierPhone());
        return supplier;
    }

    public SupplierDtoCreateUpdate checkData(SupplierDtoCreateUpdate supplier) {
        List<String> checkData = new ArrayList<>();
        checkData.add(createSupplierRepository.findByName(supplier.getSupplierName()));
        checkData.add(createSupplierRepository.findByPhone(supplier.getSupplierPhone()));
        checkData.add(createSupplierRepository.findByEmail(supplier.getSupplierEmail()));

        if (supplier.getSupplierName().equals(checkData.get(0))){
            supplier.setSupplierName("errorNameData");
        }if (supplier.getSupplierPhone().equals(checkData.get(1))){
            supplier.setSupplierPhone("errorPhoneData");
        }if (supplier.getSupplierEmail().equals(checkData.get(2))){
            supplier.setSupplierEmail("errorEmailData");
        }return supplier;
    }
}