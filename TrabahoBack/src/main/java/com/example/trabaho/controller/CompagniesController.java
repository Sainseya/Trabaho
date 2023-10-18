package com.example.trabaho.controller;

import com.example.trabaho.model.Compagnies;
import com.example.trabaho.model.Users;
import com.example.trabaho.service.CompagniesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/compagnies")
public class CompagniesController {
    private CompagniesService compagniesService;

    public CompagniesController(CompagniesService compagniesService) {
        this.compagniesService = compagniesService;
    }

    @GetMapping("")
    public List<Compagnies> findAll(){
        return compagniesService.findAll();
    }

    @PostMapping("")
    public Compagnies save(@RequestBody Compagnies compagnies){
        return compagniesService.save(compagnies);
    }
}
