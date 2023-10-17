package com.example.trabaho.service;

import com.example.trabaho.model.JobsApplication;
import com.example.trabaho.repository.JobsApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsApplicationService {
    public JobsApplicationService(JobsApplicationRepository jobsApplicationRepository) {
        this.jobsApplicationRepository = jobsApplicationRepository;
    }

    private JobsApplicationRepository jobsApplicationRepository;
    public List<JobsApplication> findAll(){
        return jobsApplicationRepository.findAll();
    }

    public JobsApplication save(JobsApplication jobsApplication){
        return  jobsApplicationRepository.save(jobsApplication);
    }
}
