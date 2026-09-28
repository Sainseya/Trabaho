package com.example.trabaho.controller;

import com.example.trabaho.model.JobsApplication;
import com.example.trabaho.payload.request.JobsApplicationRequest;
import com.example.trabaho.security.services.UserDetailsImpl;
import com.example.trabaho.service.JobsApplicationService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RequestMapping("/jobsApplication")
public class JobsApplicationController {
    public final JobsApplicationService jobsApplicationService;
    public JobsApplicationController(JobsApplicationService jobsApplicationService){
        this.jobsApplicationService = jobsApplicationService;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public Page<JobsApplication> findAll(Pageable pageable){
        return jobsApplicationService.findAll(pageable);
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public Page<JobsApplication> findMine(Pageable pageable, @AuthenticationPrincipal UserDetailsImpl currentUser){
        return jobsApplicationService.findByUserId(currentUser.getUserId(), pageable);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public JobsApplication save(@Valid @RequestBody JobsApplicationRequest request, @AuthenticationPrincipal UserDetailsImpl currentUser){
        return jobsApplicationService.apply(request, currentUser.getUserId());
    }
}
