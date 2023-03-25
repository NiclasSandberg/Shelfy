package com.example.shelfybackend;

import com.example.shelfybackend.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    public List<Product> getAllProducts() {
        return repo.getAllProducts();
    }

    public Product getProductById(String id){
        return repo.getProductById(id);
    }


    public Product saveProduct(Product product) {
        return repo.saveNewProduct(product);
    }

    public Product updateProduct(Product updatedProduct) {
        return repo.saveNewProduct(updatedProduct);
    }

    public void deleteProductById(String id) {
        repo.deleteProduct(id);
    }
}
