package com.example.trabaho.repository;

import com.example.trabaho.model.JobsApplication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobsApplicationRepository extends JpaRepository<JobsApplication, Long> {
    Page<JobsApplication> findByUser_UserId(Long userId, Pageable pageable);
}
