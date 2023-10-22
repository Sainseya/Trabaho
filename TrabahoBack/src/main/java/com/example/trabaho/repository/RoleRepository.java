package com.example.trabaho.repository;

import com.example.trabaho.model.Erole;
import com.example.trabaho.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(Erole name);
}
