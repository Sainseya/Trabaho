package com.example.trabaho.service;

import com.example.trabaho.model.Compagnies;
import com.example.trabaho.repository.CompagniesRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CompagniesService {
    private CompagniesRepository compagniesRepository;
    public CompagniesService(CompagniesRepository compagniesRepository){
        this.compagniesRepository = compagniesRepository;
    }

    public Page<Compagnies> findAll(Pageable pageable){
        return compagniesRepository.findAll(pageable);
    }

    public Compagnies save(Compagnies compagnies){
        return  compagniesRepository.save(compagnies);
    }

    public void delete(Long compagnies){
        compagniesRepository.deleteById(compagnies);
    }

}
