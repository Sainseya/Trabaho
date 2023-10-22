package com.example.trabaho.service;

import com.example.trabaho.dto.JobsDTO;
import com.example.trabaho.model.Jobs;
import com.example.trabaho.repository.JobsRepository;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobsService {
    private final JobsRepository jobsRepository;

    private final ModelMapper modelMapper;
    public JobsService(JobsRepository jobsRepository, ModelMapper modelMapper ){
        this.jobsRepository = jobsRepository;
        this.modelMapper = modelMapper;
    }

    public List<Jobs> findAll(){

        return jobsRepository.findAll();
    }

    public Jobs save(Jobs jobs){
        return  jobsRepository.save(jobs);
    }
}
