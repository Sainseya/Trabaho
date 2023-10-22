package com.example.trabaho.controller;

import com.example.trabaho.dto.JobsDTO;
import com.example.trabaho.model.Jobs;
import com.example.trabaho.service.JobsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
public class JobsController {
    public final JobsService jobsService;
    public JobsController(JobsService jobsService){
        this.jobsService = jobsService;
    }

    @GetMapping("")
    public List<Jobs> findAll(){
        return jobsService.findAll();
    }

    @PostMapping("")
    public Jobs save(@RequestBody Jobs job){
        return jobsService.save(job);
    }
}
