package com.example.trabaho.controller;

import com.example.trabaho.model.Jobs;
import com.example.trabaho.model.JobsApplication;
import com.example.trabaho.service.JobsApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/jobsApplication")
public class JobsApplicationController {
    public final JobsApplicationService jobsApplicationService;
    public JobsApplicationController(JobsApplicationService jobsApplicationService){
        this.jobsApplicationService = jobsApplicationService;
    }

    @GetMapping("")
    public List<JobsApplication> findAll(){
        return jobsApplicationService.findAll();
    }

    @PostMapping("")
    public JobsApplication save(@RequestBody JobsApplication jobsApplication){
        return jobsApplicationService.save(jobsApplication);
    }
}
