package com.example.trabaho.service;

import com.example.trabaho.model.Jobs;
import com.example.trabaho.model.JobsApplication;
import com.example.trabaho.model.Users;
import com.example.trabaho.payload.request.JobsApplicationRequest;
import com.example.trabaho.repository.JobsApplicationRepository;
import com.example.trabaho.repository.JobsRepository;
import com.example.trabaho.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class JobsApplicationService {
    private final JobsApplicationRepository jobsApplicationRepository;
    private final JobsRepository jobsRepository;
    private final UserRepository userRepository;

    public JobsApplicationService(JobsApplicationRepository jobsApplicationRepository,
                                   JobsRepository jobsRepository,
                                   UserRepository userRepository) {
        this.jobsApplicationRepository = jobsApplicationRepository;
        this.jobsRepository = jobsRepository;
        this.userRepository = userRepository;
    }

    public Page<JobsApplication> findAll(Pageable pageable){
        return jobsApplicationRepository.findAll(pageable);
    }

    public Page<JobsApplication> findByUserId(Long userId, Pageable pageable){
        return jobsApplicationRepository.findByUser_UserId(userId, pageable);
    }

    public JobsApplication apply(JobsApplicationRequest request, Long applicantUserId){
        Jobs jobs = jobsRepository.findById(request.getJobsId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Job not found"));
        Users applicant = userRepository.findById(applicantUserId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        JobsApplication application = new JobsApplication();
        application.setJobs(jobs);
        application.setUser(applicant);
        return jobsApplicationRepository.save(application);
    }
}
