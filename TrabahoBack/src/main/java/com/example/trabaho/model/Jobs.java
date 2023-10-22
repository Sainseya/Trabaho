package com.example.trabaho.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "jobs")
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "jobs_id")
    private Long jobsId;
    private String title;
    private String description;
    private String expectation;
    private String tags;
    private String place;
    private String period;
    private String location;
    private String role;
    private Integer salary;

    @ManyToOne
    @JoinColumn(name = "compagnies_id")
    private Compagnies compagny;

    @OneToMany(mappedBy = "jobs" )
    @JsonIgnore
    private List<JobsApplication> jobsApplications;
}
