package com.example.shelfybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepo {

    @Autowired
    IProductRepo repo;

    public List<Product> getAllProducts(){
        return (List<Product>) repo.findAll();
    }
}
