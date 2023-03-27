package com.example.shelfybackend;

import com.example.shelfybackend.models.Category;
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

    @GetMapping("/categories")
    ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = service.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping
    ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = service.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    ResponseEntity<Product> getArticleById(@PathVariable String id){
        // add message if product not found
        Product product = service.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping
    ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product newProduct = service.saveProduct(product);

        return ResponseEntity.ok(newProduct);

    }
    
    @PutMapping("/{id}")
    ResponseEntity<Product> updateProduct(@RequestBody Product updatedProduct, @PathVariable String id){
        if (service.getProductById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        Product newProduct = service.updateProduct(updatedProduct);

        return ResponseEntity.ok(newProduct);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteProduct(@PathVariable String id){
        service.deleteProductById(id);
        return ResponseEntity.noContent().build();
    }

}
