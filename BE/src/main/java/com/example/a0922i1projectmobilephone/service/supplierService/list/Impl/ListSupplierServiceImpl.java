package com.example.a0922i1projectmobilephone.service.supplierService.list.Impl;

import com.example.a0922i1projectmobilephone.entity.Supplier;
import com.example.a0922i1projectmobilephone.repository.supplierRepository.ISupplierRepository;
import com.example.a0922i1projectmobilephone.service.supplierService.list.IListSupplierService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ListSupplierServiceImpl implements IListSupplierService {
    @Autowired
    private ISupplierRepository supplierRepository;

    @Override
    public Page<Supplier> findAll(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
        return supplierRepository.findAllSupplier(pageable);
    }


    @Override
    public Optional<Supplier> findById(int id) {
        return supplierRepository.findById(id);
    }

    @Override
    public boolean deleteById(int id) {
        supplierRepository.deleteSupplier(id);
        return true;
    }

    @Override
    public boolean existsById(int id) {
        return supplierRepository.existsById(id);
    }




    @Override
    public Page<Supplier> searchSuppliers(String name, String address, String phone, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);

        if (name == null && address == null && phone == null) {
            return supplierRepository.findAll(pageable);
        } else {
            return supplierRepository.searchSuppliers(name, address, phone, pageable);
        }
    }

    @Override
    public Page<Supplier> getSuppliers(String name, String address, String phone, Pageable pageable) {
        if (name == null && address == null && phone == null) {
            return supplierRepository.getAllSuppliers(pageable);
        } else {
            return supplierRepository.getAllSuppliers(name, address, phone, pageable);
        }
    }

}
