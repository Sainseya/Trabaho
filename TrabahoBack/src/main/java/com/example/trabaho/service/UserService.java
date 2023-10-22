package com.example.trabaho.service;

import com.example.trabaho.dto.UserDTO;
import com.example.trabaho.model.Users;
import com.example.trabaho.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    public UserService(UserRepository userRepository, ModelMapper modelMapper){
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public List<Users> findAll(){
        return userRepository.findAll();
    }

    public UserDTO findUserById(Long userId){
        Users user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"User Not-Found"));
        return modelMapper.map(user, UserDTO.class) ;
    }

    public Users save(Users user){
        return  userRepository.save(user);
    }

    public void deleteUser(Long userId){
        userRepository.deleteById(userId);
    }

    public Users update(Users user, Long userId)throws Error {
        Users existingUser = userRepository.findById(userId).orElseThrow(() -> new Error("User not found"));
        existingUser.setLastname(user.getLastname());
        existingUser.setUsername(user.getUsername());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
/*
        existingUser.setPassword(user.getPassword());
*/
        return userRepository.save(existingUser);
    }

}
