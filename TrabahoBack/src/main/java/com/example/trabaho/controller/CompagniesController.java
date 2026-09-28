package com.example.trabaho.controller;

import com.example.trabaho.model.Compagnies;
import com.example.trabaho.service.CompagniesService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RequestMapping("/compagnies")
public class CompagniesController {
    private CompagniesService compagniesService;

    public CompagniesController(CompagniesService compagniesService) {
        this.compagniesService = compagniesService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("")
    public Page<Compagnies> findAll(Pageable pageable){
        return compagniesService.findAll(pageable);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("")
    public Compagnies save(@RequestBody Compagnies compagnies){
        return compagniesService.save(compagnies);
    }
}
