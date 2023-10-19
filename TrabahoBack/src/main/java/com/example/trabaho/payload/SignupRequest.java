package com.example.trabaho.payload;

import jakarta.validation.constraints.NotBlank;

public class SignupRequest {
    @NotBlank
    private String firstname;

    @NotBlank
    private String password;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
