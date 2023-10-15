package com.example.trabaho.service;

import com.example.trabaho.model.User;
import com.example.trabaho.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User save(User user){
        return  userRepository.save(user);
    }
}
