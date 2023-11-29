package com.example.a0922i1projectmobilephone.service.homepage;

import com.example.a0922i1projectmobilephone.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface HomePageService {
    List<Product> showAll();

    Page<Product> findByName(Pageable pageable,String productName);

    Iterable<Product> findAll();

    Optional<Product> findById(Integer id);
}
