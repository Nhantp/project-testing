package com.example.a0922i1projectmobilephone.repository.supplierRepository.update.impl;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class UpdateSupplierRepository {
    @PersistenceContext
    private EntityManager entityManager;
    public void updateSupplier(String address, String email, String name, String phone, int id){
        entityManager.createNativeQuery("UPDATE `mobilephone`.`supplier` SET `supplier_address` = ?, `supplier_email` = ?, `supplier_name` = ?, `supplier_phone` = ?" +
                        " WHERE (`supplier_id` = ?)")
                .setParameter(1, address)
                .setParameter(2, email)
                .setParameter(3,name)
                .setParameter(4, phone)
                .setParameter(5,id)
                .executeUpdate();
    }

    public String findByName(String supplierName, int supplier_id){
        Query query = entityManager.createNativeQuery("SELECT supplier_name FROM supplier WHERE supplier_name = ? && supplier_id != ?")
                .setParameter(1,supplierName)
                .setParameter(2,supplier_id);

        List<String> checkData = query.getResultList();
        String checkDataString = String.join(",",checkData);
        return checkDataString;
    }

    public String findByPhone(String supplierPhone, int supplier_id){
        Query query = entityManager.createNativeQuery("SELECT supplier_phone FROM supplier WHERE supplier_phone = ? && supplier_id != ?")
                .setParameter(1,supplierPhone)
                .setParameter(2,supplier_id);
        List<String> checkData = query.getResultList();
        String checkDataString = String.join(",",checkData);
        return checkDataString;
    }

    public String findByEmail(String supplierEmail, int supplier_id){
        Query query = entityManager.createNativeQuery("SELECT supplier_email FROM supplier WHERE supplier_email = ? && supplier_id != ?")
                .setParameter(1,supplierEmail)
                .setParameter(2,supplier_id);
        List<String> checkData = query.getResultList();
        String checkDataString = String.join(",",checkData);
        return checkDataString;
    }

}
