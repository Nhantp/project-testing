package com.example.a0922i1projectmobilephone.repository.supplierRepository;

import com.example.a0922i1projectmobilephone.entity.Supplier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ISupplierRepository extends JpaRepository<Supplier, Integer> {
    @Query(value = "SELECT * FROM Supplier s WHERE s.delete_flag = 0", nativeQuery = true)
    Page<Supplier> findAllSupplier(Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Supplier s set s.delete_flag = 1  where s.supplier_id =:id",
            nativeQuery = true)
    void deleteSupplier(int id);
    @Query(value = "SELECT * FROM supplier s " +
            "WHERE (:name IS NULL OR s.supplier_name LIKE CONCAT('%', :name, '%')) " +
            "AND (:address IS NULL OR s.supplier_address LIKE CONCAT('%', :address, '%')) " +
            "AND (:phone IS NULL OR s.supplier_phone LIKE CONCAT('%', :phone, '%'))",
            nativeQuery = true)
    Page<Supplier> searchSuppliers(String name, String address, String phone, Pageable pageable);

    @Query(value = "SELECT * FROM supplier s WHERE  s.delete_flag=0 ",
            countQuery = "SELECT * FROM supplier s WHERE  s.delete_flag=0",
            nativeQuery = true)
    Page<Supplier> getAllSuppliers(Pageable pageable);

    @Query(value = "SELECT s.* FROM Supplier s " +
            "WHERE (s.supplier_name LIKE CONCAT('%', :name, '%') or :name is null)" +
            "AND (s.supplier_address LIKE CONCAT('%', :address, '%') or :address is null)" +
            "AND (s.supplier_phone LIKE CONCAT('%', :phone, '%') or :phone is null)" +
            "AND s.delete_flag = 0",
            countQuery = "SELECT s.* FROM Supplier s " +
                    "WHERE (s.supplier_name LIKE CONCAT('%', :name, '%') or :name is null)" +
                    "AND (s.supplier_address LIKE CONCAT('%', :address, '%') or :address is null)" +
                    "AND (s.supplier_phone LIKE CONCAT('%', :phone, '%') or :phone is null)" +
            "AND s.delete_flag = 0",
            nativeQuery = true)
    Page<Supplier> getAllSuppliers(@Param("name") String name,
                                   @Param("address") String address,
                                   @Param("phone") String phone,
                                   Pageable pageable);
}