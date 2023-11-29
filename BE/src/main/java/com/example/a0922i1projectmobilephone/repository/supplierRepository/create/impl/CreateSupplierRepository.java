package com.example.a0922i1projectmobilephone.repository.supplierRepository.create.impl;

import com.example.a0922i1projectmobilephone.entity.Supplier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class CreateSupplierRepository {
    @PersistenceContext
    private EntityManager entityManager;
    public void addNewSupplier(String address, String email, String name, String phone){
            entityManager.createNativeQuery("insert into supplier(supplier_address,supplier_email,supplier_name,supplier_phone,delete_flag)" +
                    "VALUES(?, ?, ?, ?,?)")
                    .setParameter(1, address)
                    .setParameter(2, email)
                    .setParameter(3,name)
                    .setParameter(4, phone)
                    .setParameter(5, 0)
                    .executeUpdate();
    }

    public String findByName(String supplierName){
      Query query = entityManager.createNativeQuery("SELECT supplier_name FROM supplier WHERE supplier_name = ?")
                .setParameter(1,supplierName);

        List<String> checkData = query.getResultList();
        String checkDataString = String.join(",",checkData);
        return checkDataString;
    }

    public String findByPhone(String supplierPhone){
        Query query = entityManager.createNativeQuery("SELECT supplier_phone FROM supplier WHERE supplier_phone = ?")
                .setParameter(1,supplierPhone);
        List<String> checkData = query.getResultList();
        String checkDataString = String.join(",",checkData);
        return checkDataString;
    }

    public String findByEmail(String supplierEmail){
        Query query = entityManager.createNativeQuery("SELECT supplier_email FROM supplier WHERE supplier_email = ?")
                .setParameter(1,supplierEmail);
        List<String> checkData = query.getResultList();
        String checkDataString = String.join(",",checkData);
        return checkDataString;
    }
}
