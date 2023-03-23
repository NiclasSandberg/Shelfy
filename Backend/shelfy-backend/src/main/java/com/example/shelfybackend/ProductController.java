package com.example.shelfybackend;

import com.example.shelfybackend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    ResponseEntity<Product> getArticleById(@PathVariable String id){
        Product product = service.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping
    ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product newProduct = service.saveProduct(product);

        return ResponseEntity.ok(newProduct);

    }

}
