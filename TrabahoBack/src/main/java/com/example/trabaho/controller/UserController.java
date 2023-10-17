package com.example.trabaho.controller;

import com.example.trabaho.model.Users;
import com.example.trabaho.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    public final UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("")
    public List<Users> findAll(){
        return userService.findAll();
}

    @PostMapping("")
    public Users save(@RequestBody Users user){
        return userService.save(user);
    }
}
