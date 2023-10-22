package com.example.trabaho.controller;

import com.example.trabaho.dto.UserDTO;
import com.example.trabaho.model.Users;
import com.example.trabaho.service.UserService;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
public class UserController {
    public final UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/getUser")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Users> findAll(){
        return userService.findAll();
}

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public UserDTO findUserById(@PathVariable Long id){
        return userService.findUserById(id);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public Users save(@RequestBody Users user){
        return userService.save(user);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PutMapping("/{userId}")
    public Users update(@RequestBody Users user, @PathVariable Long userId) throws Error {
        return userService.update(user,userId);
    }

}
