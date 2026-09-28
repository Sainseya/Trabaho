package com.example.trabaho.controller;

import com.example.trabaho.dto.UserDTO;
import com.example.trabaho.model.Users;
import com.example.trabaho.payload.request.UserCreateRequest;
import com.example.trabaho.payload.request.UserUpdateRequest;
import com.example.trabaho.service.UserService;

import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    public Page<Users> findAll(Pageable pageable){
        return userService.findAll(pageable);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public UserDTO findUserById(@PathVariable Long id){
        return userService.findUserById(id);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public UserDTO save(@Valid @RequestBody UserCreateRequest request){
        return userService.create(request);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PutMapping("/{userId}")
    public UserDTO update(@Valid @RequestBody UserUpdateRequest request, @PathVariable Long userId){
        return userService.update(request, userId);
    }

}
