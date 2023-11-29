package com.example.a0922i1projectmobilephone.service.impl;

import com.example.a0922i1projectmobilephone.entity.Category;
import com.example.a0922i1projectmobilephone.repository.ICategoryRepository;
import com.example.a0922i1projectmobilephone.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public List<Category> findAllCategories() {
        return categoryRepository.findAllCategories();
    }
}
