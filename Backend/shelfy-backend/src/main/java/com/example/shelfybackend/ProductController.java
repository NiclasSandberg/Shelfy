package com.example.shelfybackend;

import ch.qos.logback.core.model.Model;
import com.example.shelfybackend.models.Category;
import com.example.shelfybackend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
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
    ResponseEntity<List<Product>> getAllProductsForUser(@AuthenticationPrincipal OidcUser principal) {
        // through the annotation @AuthenticationPrincipal in HomeController in auth0 docs we can get decrypted user
        //(Model model, @AuthenticationPrincipal OidcUser principal)
        // from the token, get the email, from the email get the userId
        Long userId = 888l;
        List<Product> products = service.getProductsByUserId(userId);
        System.out.println(principal.getClaims());

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
