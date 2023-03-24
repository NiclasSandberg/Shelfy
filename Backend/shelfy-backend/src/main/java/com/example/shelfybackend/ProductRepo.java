package com.example.shelfybackend;

import com.example.shelfybackend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepo {

    @Autowired
    IProductRepo repo;

    public List<Product> getAllProducts(){
        return (List<Product>) repo.findAll();
    }

    public Product getProductById(String id){
        Optional<Product> byId = repo.findById(id);
        return byId.orElse(null);
    }

    public Product saveNewProduct(Product product){
        return repo.save(product);
    }
}
