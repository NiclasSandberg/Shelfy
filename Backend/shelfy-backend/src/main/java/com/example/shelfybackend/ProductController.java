package com.example.shelfybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("products")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping
    ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = service.getAllProducts();
        return ResponseEntity.ok(products);
    }


}
