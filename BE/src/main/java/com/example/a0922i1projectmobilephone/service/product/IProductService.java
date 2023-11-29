package com.example.a0922i1projectmobilephone.service.product;

import com.example.a0922i1projectmobilephone.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Product findProductById (Integer productId);
    boolean deleteProductById (Integer productId);
    Page<Product> getProductList (String brandName, String sellingPrice, String productName, String productCpu,boolean isOnSaleScreen, Pageable pageable);
}
