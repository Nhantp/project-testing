package com.example.a0922i1projectmobilephone.service.homepage;

import com.example.a0922i1projectmobilephone.entity.Product;
import com.example.a0922i1projectmobilephone.repository.home_page.HomePageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HomePageImpl implements HomePageService {
    @Autowired
    private HomePageRepository homePageRepository;

    @Override
    public List<Product> showAll() {
        return (List<Product>) homePageRepository.findAllProduct();
    }

    @Override
    public Page<Product> findByName(Pageable pageable, String productName) {
        return homePageRepository.findByProductNameLike(pageable, productName);
    }

    @Override
    public Iterable<Product> findAll() {
        return homePageRepository.findAll();
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return homePageRepository.findById(id);
    }
}
