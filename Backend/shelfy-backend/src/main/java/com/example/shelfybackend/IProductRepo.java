package com.example.shelfybackend;

import com.example.shelfybackend.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface IProductRepo extends CrudRepository<Product, String> {
}
