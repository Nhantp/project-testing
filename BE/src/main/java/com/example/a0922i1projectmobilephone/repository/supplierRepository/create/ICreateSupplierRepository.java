package com.example.a0922i1projectmobilephone.repository.supplierRepository.create;

import com.example.a0922i1projectmobilephone.dto.supplier.SupplierDtoCreateUpdate;
import com.example.a0922i1projectmobilephone.entity.Supplier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICreateSupplierRepository extends JpaRepository<Supplier, Integer> {
    @Query(value = "SELECT * FROM supplier", nativeQuery = true)
    List<Supplier> findAllSupplier();


}
