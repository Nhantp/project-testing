package com.example.a0922i1projectmobilephone.repository.home_page;

import com.example.a0922i1projectmobilephone.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomePageRepository extends PagingAndSortingRepository<Product,Integer> {

    @Query(value = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id where p.delete_flag=0 and p.is_publish = 1",
            countQuery = "SELECT p.* FROM Product p JOIN Brand b ON p.brand_id = b.brand_id where p.delete_flag=0 and p.is_publish = 1",
            nativeQuery = true)

 List<Product> findAllProduct();

Page<Product>findByProductNameLike(Pageable pageable, String productName);
}
