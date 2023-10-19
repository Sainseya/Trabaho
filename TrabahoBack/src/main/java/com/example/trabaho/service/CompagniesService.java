package com.example.trabaho.service;

import com.example.trabaho.model.Compagnies;
import com.example.trabaho.model.Users;
import com.example.trabaho.repository.CompagniesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompagniesService {
    private CompagniesRepository compagniesRepository;
    public CompagniesService(CompagniesRepository compagniesRepository){
        this.compagniesRepository = compagniesRepository;
    }

    public List<Compagnies> findAll(){

        return compagniesRepository.findAll();
    }

    public Compagnies save(Compagnies compagnies){
        return  compagniesRepository.save(compagnies);
    }

    public void delete(Long compagnies){
        compagniesRepository.deleteById(compagnies);
    }

}
