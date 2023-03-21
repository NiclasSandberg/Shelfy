package com.example.shelfybackend;

import org.springframework.data.repository.CrudRepository;

public interface IProductRepo extends CrudRepository<Product, String> {
}
