package com.example.trabaho.service;

import com.example.trabaho.model.Users;
import com.example.trabaho.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<Users> findAll(){
        return userRepository.findAll();
    }

    public Users save(Users user){
        return  userRepository.save(user);
    }

/*    public User deleteUSer(User user){
        return userRepository.deleteById(user);
    }*/
}
