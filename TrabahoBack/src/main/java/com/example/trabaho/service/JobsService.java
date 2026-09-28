package com.example.trabaho.service;

import com.example.trabaho.model.Jobs;
import com.example.trabaho.repository.JobsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class JobsService {
    private final JobsRepository jobsRepository;

    private final ModelMapper modelMapper;
    public JobsService(JobsRepository jobsRepository, ModelMapper modelMapper ){
        this.jobsRepository = jobsRepository;
        this.modelMapper = modelMapper;
    }

    public Page<Jobs> findAll(Pageable pageable){
        return jobsRepository.findAll(pageable);
    }

    public Jobs save(Jobs jobs){
        return  jobsRepository.save(jobs);
    }
}
