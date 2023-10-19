package com.example.trabaho.payload;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {
    @NotBlank
    private String firstname;

    @NotBlank
    private String password;

    public String getUsername() {
        return firstname;
    }

    public void setUsername(String username) {
        this.firstname = firstname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
