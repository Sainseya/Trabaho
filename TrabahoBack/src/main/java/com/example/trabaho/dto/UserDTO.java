package com.example.trabaho.dto;

import com.example.trabaho.model.JobsApplication;
import com.example.trabaho.model.Skills;
import lombok.Data;

import java.util.List;

@Data
public class UserDTO {
    private Long userId;
    private String username;
    private String lastname;
    private String email;
    private String phone;
    private List<Skills> skills;
    private List<JobsApplication> jobsApplications;
}
