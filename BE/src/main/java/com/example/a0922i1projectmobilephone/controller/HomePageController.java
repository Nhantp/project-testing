package com.example.a0922i1projectmobilephone.controller;

import com.example.a0922i1projectmobilephone.entity.Product;
import com.example.a0922i1projectmobilephone.security.jwt.JwtProvider;
import com.example.a0922i1projectmobilephone.service.homepage.HomePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/products")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class HomePageController {
    @Autowired
    private HomePageService homePageService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;

    //    @GetMapping
//    public Page<Product> getAllProducts(@PageableDefault(value = 3, sort = "productName", direction = Sort.Direction.ASC) Pageable pageable) {
//        return homePageService.showAll(pageable);
//    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = homePageService.showAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
