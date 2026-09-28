package com.example.trabaho.controller;

import com.example.trabaho.model.Jobs;
import com.example.trabaho.service.JobsService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
public class JobsController {
    public final JobsService jobsService;
    public JobsController(JobsService jobsService){
        this.jobsService = jobsService;
    }

    @GetMapping("")
    public Page<Jobs> findAll(Pageable pageable){
        return jobsService.findAll(pageable);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ADMIN')")
    public Jobs save(@RequestBody Jobs job){
        return jobsService.save(job);
    }
}
