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
@Table(name = "compagnies")
public class Compagnies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "compagnies_id")
    private Long compagniesId;
    private String compagnyName;
    private String location;

    @OneToMany(mappedBy = "compagny" )
    @JsonIgnore
    private List<Jobs> jobs;
}
