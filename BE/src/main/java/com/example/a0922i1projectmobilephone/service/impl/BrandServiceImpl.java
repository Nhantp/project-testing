package com.example.a0922i1projectmobilephone.service.impl;

import com.example.a0922i1projectmobilephone.entity.Brand;
import com.example.a0922i1projectmobilephone.repository.IBrandRepository;
import com.example.a0922i1projectmobilephone.service.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceImpl implements IBrandService {
    @Autowired
    private IBrandRepository brandRepository;

    @Override
    public List<Brand> findAllBrands() {
        return brandRepository.findAllBrands();
    }
}
