package com.example.a0922i1projectmobilephone.dto.product;

import com.example.a0922i1projectmobilephone.entity.Brand;
import com.example.a0922i1projectmobilephone.entity.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public class ResponseProduct {
    private Page<Product> productPage;
    private List<Brand> brandList;

    public ResponseProduct() {
    }

    public ResponseProduct(Page<Product> productPage, List<Brand> brandList) {
        this.productPage = productPage;
        this.brandList = brandList;
    }

    public Page<Product> getProductPage() {
        return productPage;
    }

    public void setProductPage(Page<Product> productPage) {
        this.productPage = productPage;
    }

    public List<Brand> getBrandList() {
        return brandList;
    }

    public void setBrandList(List<Brand> brandList) {
        this.brandList = brandList;
    }
}
