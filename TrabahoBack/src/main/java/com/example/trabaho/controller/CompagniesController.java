package com.example.trabaho.controller;

import com.example.trabaho.model.Compagnies;
import com.example.trabaho.model.Users;
import com.example.trabaho.service.CompagniesService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/compagnies")
public class CompagniesController {
    private CompagniesService compagniesService;

    public CompagniesController(CompagniesService compagniesService) {
        this.compagniesService = compagniesService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("")
    public List<Compagnies> findAll(){
        return compagniesService.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("")
    public Compagnies save(@RequestBody Compagnies compagnies){
        return compagniesService.save(compagnies);
    }
}
