package com.example.trabaho.repository;

import com.example.trabaho.model.Compagnies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompagniesRepository  extends JpaRepository<Compagnies, Long> {
}
