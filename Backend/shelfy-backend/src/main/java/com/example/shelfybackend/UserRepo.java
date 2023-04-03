package com.example.shelfybackend;

import com.example.shelfybackend.models.Product;
import com.example.shelfybackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepo {

    @Autowired
    IUserRepo userRepo;

    public User getUserById(String id){
        Optional<User> byId = userRepo.findById(id);
        return byId.orElse(null);
    }

}
