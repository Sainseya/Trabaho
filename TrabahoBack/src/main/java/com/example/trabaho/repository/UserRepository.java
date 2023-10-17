package com.example.trabaho.repository;

import com.example.trabaho.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    /*User deleteById(User user);*/
}
