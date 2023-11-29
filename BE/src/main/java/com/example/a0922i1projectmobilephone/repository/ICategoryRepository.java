package com.example.a0922i1projectmobilephone.repository;

import com.example.a0922i1projectmobilephone.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Integer> {
    @Query(value = "SELECT * FROM category",
            nativeQuery = true)
    List<Category> findAllCategories();
}
