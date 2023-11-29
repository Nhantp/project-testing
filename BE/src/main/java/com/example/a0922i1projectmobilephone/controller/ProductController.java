package com.example.a0922i1projectmobilephone.controller;

import com.example.a0922i1projectmobilephone.dto.product.ResponseProduct;
import com.example.a0922i1projectmobilephone.entity.Product;
import com.example.a0922i1projectmobilephone.service.IBrandService;
import com.example.a0922i1projectmobilephone.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @Autowired
    private IBrandService iBrandService;

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable(value = "id", required = false) Integer idProduct) {
        Product product = iProductService.findProductById(idProduct);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable(value = "id", required = false) Integer idProduct) {
        boolean deletedProduct = iProductService.deleteProductById(idProduct);
        if (deletedProduct) {
            return new ResponseEntity<>(Collections.singletonMap("message", "Delete product successfully"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/product/list")
    public ResponseEntity<Page<Product>> getProductList(
            Model model,
            @RequestParam(value = "brandName", required = false) Optional<String> brand,
            @RequestParam(value = "sellingPrice", required = false) Optional<String> price,
            @RequestParam(value = "productName", required = false) Optional<String> name,
            @RequestParam(value = "productCpu", required = false) Optional<String> cpu,
            @RequestParam(value = "page", required = false) Optional<Integer> page,
            @RequestParam(value = "size", required = false) Optional<Integer> size,
            @RequestParam(value = "sort", required = false) Optional<String> sort,
            @RequestParam(value = "direction", required = false) Optional<Boolean> direction,
            @RequestParam(value = "isOnSaleScreen",required = false) boolean isOnSaleScreen) {
        Integer currentPage = page.orElse(1);
        Integer pageSize = size.orElse(8);
        String brandName = brand.orElse(null);
        String sellingPrice = price.orElse(null);
        String productName = name.orElse(null);
        String productCpu = cpu.orElse(null);
        brandName = "".equals(brandName) ? null : brandName;
        sellingPrice = "".equals(sellingPrice) ? null : sellingPrice;
        productName = "".equals(productName) ? null : productName;
        productCpu = "".equals(productCpu) ? null : productCpu;
        String sortField = sort.orElse("product_id");
        sortField = "".equals(sortField) ? "product_id" : sortField;
        Boolean directionSort = direction.orElse(true);
        model.addAttribute("currentPage", currentPage);
        Page<Product> products;
        if (directionSort) {
            products = iProductService.getProductList(brandName, sellingPrice, productName, productCpu, isOnSaleScreen, PageRequest.of(currentPage - 1, pageSize, Sort.by(sortField).ascending()));
        } else {
            products = iProductService.getProductList(brandName, sellingPrice, productName, productCpu, isOnSaleScreen, PageRequest.of(currentPage - 1, pageSize, Sort.by(sortField).descending()));
        }
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/product")
    public ResponseEntity<ResponseProduct> getResponseProduct(
            Model model,
            @RequestParam(value = "brandName", required = false) Optional<String> brand,
            @RequestParam(value = "sellingPrice", required = false) Optional<String> price,
            @RequestParam(value = "productName", required = false) Optional<String> name,
            @RequestParam(value = "productCpu", required = false) Optional<String> cpu,
            @RequestParam(value = "page", required = false) Optional<Integer> page,
            @RequestParam(value = "size", required = false) Optional<Integer> size,
            @RequestParam(value = "sort", required = false) Optional<String> sort,
            @RequestParam(value = "direction", required = false) Optional<Boolean> direction,
            @RequestParam(value = "isOnSaleScreen",required = false) boolean isOnSaleScreen) {
        Integer currentPage = page.orElse(1);
        Integer pageSize = size.orElse(8);
        String brandName = brand.orElse(null);
        String sellingPrice = price.orElse(null);
        String productName = name.orElse(null);
        String productCpu = cpu.orElse(null);
        brandName = "".equals(brandName) ? null : brandName;
        sellingPrice = "".equals(sellingPrice) ? null : sellingPrice;
        productName = "".equals(productName) ? null : productName;
        productCpu = "".equals(productCpu) ? null : productCpu;
        String sortField = sort.orElse("product_id");
        sortField = "".equals(sortField) ? "product_id" : sortField;
        Boolean directionSort = direction.orElse(false);
        model.addAttribute("currentPage", currentPage);
        Page<Product> products;
        if (directionSort) {
            products = iProductService.getProductList(brandName, sellingPrice, productName, productCpu, isOnSaleScreen, PageRequest.of(currentPage - 1, pageSize, Sort.by(sortField).ascending()));
        } else {
            products = iProductService.getProductList(brandName, sellingPrice, productName, productCpu, isOnSaleScreen,PageRequest.of(currentPage - 1, pageSize, Sort.by(sortField).descending()));
        }
        ResponseProduct responseProduct = new ResponseProduct(products,iBrandService.findAllBrands());
        return new ResponseEntity<>(responseProduct, HttpStatus.OK);
    }
}
