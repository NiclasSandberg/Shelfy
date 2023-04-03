package com.example.shelfybackend;

import ch.qos.logback.core.model.Model;
import com.example.shelfybackend.models.Category;
import com.example.shelfybackend.models.Product;
import com.example.shelfybackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping("/categories")
    ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = service.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping
    ResponseEntity<List<Product>> getAllProductsForUser() {
        // through the annotation @AuthenticationPrincipal in HomeController in auth0 docs we can get decrypted user
        //(Model model, @AuthenticationPrincipal OidcUser principal)
        // from the token, get the email, from the email get the userId
        String id = SecurityContextHolder.getContext().getAuthentication().getName().toString();
        System.out.println("THE ID IS HERE: " + SecurityContextHolder.getContext().getAuthentication().getName().toString());

       if(service.userExists(id)){
              List<Product> products = service.getProductsByUserId(id);
              return ResponseEntity.ok(products);
       }else{
            User newUser = new User();
            newUser.setUserId(id);
            return ResponseEntity.ok(null);
       }
//        Long userId = 888l;
//        List<Product> products = service.getProductsByUserId(SecurityContextHolder.getContext().getAuthentication().getName());
//        System.out.println(principal.getClaims());
    }


    @GetMapping("/{id}")
    ResponseEntity<Product> getProductById(@PathVariable String id){
        // add message if product not found
        Product product = service.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping
    ResponseEntity<Product> createProduct(@RequestBody Product product){
        String id = SecurityContextHolder.getContext().getAuthentication().getName().toString();
        Product newProduct = service.saveProduct(product, id);
        //newProduct.setUser();
        System.out.println("THE ID IS HERE POSTMAPPING: " + SecurityContextHolder.getContext().getAuthentication().getName().toString());



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
