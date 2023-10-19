package com.example.trabaho.security.services;

import com.example.trabaho.model.Users;
import com.example.trabaho.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String firstname) throws UsernameNotFoundException {
        Users user = userRepository.findByFirstname(firstname)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with firstname: " + firstname));

        return UserDetailsImpl.build(user);
    }

}
