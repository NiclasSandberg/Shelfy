package com.example.shelfybackend;

import com.example.shelfybackend.models.Category;
import com.example.shelfybackend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepo {

    @Autowired
    IProductRepo productRepo;

    @Autowired
    ICategoryRepo categoryRepo;

    public List<Product> getAllProducts(){
        return (List<Product>) productRepo.findAll();
    }

    public Product getProductById(String id){
        Optional<Product> byId = productRepo.findById(id);
        return byId.orElse(null);
    }

    public Product saveNewProduct(Product product){
        return productRepo.save(product);
    }

    public void deleteProduct(String id) {
        productRepo.deleteById(id);
    }

    public List<Category> getAllCategories(){
        return (List<Category>) categoryRepo.findAll();
    }
}
