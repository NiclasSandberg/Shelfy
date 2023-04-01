package com.example.shelfybackend;

import com.example.shelfybackend.models.Product;
import com.example.shelfybackend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserRepo extends CrudRepository<User, Long> {
}
