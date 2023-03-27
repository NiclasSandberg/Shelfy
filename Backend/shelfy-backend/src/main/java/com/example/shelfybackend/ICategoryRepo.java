package com.example.shelfybackend;

import com.example.shelfybackend.models.Category;
import com.example.shelfybackend.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ICategoryRepo extends CrudRepository<Category, String> {

}
