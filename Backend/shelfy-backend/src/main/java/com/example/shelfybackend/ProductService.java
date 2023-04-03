package com.example.shelfybackend;

import com.example.shelfybackend.models.Category;
import com.example.shelfybackend.models.Product;
import com.example.shelfybackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    @Autowired
    UserRepo userRepo;

    public List<Product> getAllProducts() {
        return repo.getAllProducts();
    }

    public Product getProductById(String id){
        return repo.getProductById(id);
    }


    public Product saveProduct(Product product, String userId) {
        product.setUser(userRepo.getUserById(userId));
        return repo.saveNewProduct(product);
    }

    public Product updateProduct(Product updatedProduct) {
        return repo.saveNewProduct(updatedProduct);
    }

    public void deleteProductById(String id) {
        repo.deleteProduct(id);
    }

    public List<Category> getAllCategories() {
        return repo.getAllCategories();
    }


    public List<Product> getProductsByUserId(String userId) {
        User user = userRepo.getUserById(userId);
        return user.getUserProducts();
    }

    // check if user has been created before
    public boolean userExists(String id){
        if(userRepo.getUserById(id) != null){
            return true;
        }else{
            return false;
        }
    }

}
