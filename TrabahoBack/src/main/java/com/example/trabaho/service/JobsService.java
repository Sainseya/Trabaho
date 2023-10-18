package com.example.trabaho.service;

import com.example.trabaho.model.Jobs;
import com.example.trabaho.model.Users;
import com.example.trabaho.repository.JobsRepository;
import com.example.trabaho.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsService {
    private final JobsRepository jobsRepository;
    public JobsService(JobsRepository jobsRepository){
        this.jobsRepository = jobsRepository;
    }

    public List<Jobs> findAll(){
        return jobsRepository.findAll();
    }

    public Jobs save(Jobs jobs){
        return  jobsRepository.save(jobs);
    }
}
