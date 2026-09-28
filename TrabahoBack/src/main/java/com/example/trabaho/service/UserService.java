package com.example.trabaho.service;

import com.example.trabaho.dto.UserDTO;
import com.example.trabaho.model.Erole;
import com.example.trabaho.model.Role;
import com.example.trabaho.model.Users;
import com.example.trabaho.payload.request.UserCreateRequest;
import com.example.trabaho.payload.request.UserUpdateRequest;
import com.example.trabaho.repository.RoleRepository;
import com.example.trabaho.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;

    public UserService(UserRepository userRepository, RoleRepository roleRepository,
                        PasswordEncoder passwordEncoder, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.modelMapper = modelMapper;
    }

    public Page<Users> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public UserDTO findUserById(Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User Not-Found"));
        return modelMapper.map(user, UserDTO.class);
    }

    public UserDTO create(UserCreateRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username is already taken!");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is already in use!");
        }

        Users user = new Users(request.getUsername(), request.getEmail(), passwordEncoder.encode(request.getPassword()));
        user.setLastname(request.getLastname());
        user.setPhone(request.getPhone());
        user.setRoles(resolveRoles(request.getRoles()));

        Users saved = userRepository.save(user);
        return modelMapper.map(saved, UserDTO.class);
    }

    private Set<Role> resolveRoles(Set<String> requestedRoles) {
        Set<Role> roles = new HashSet<>();
        if (requestedRoles == null || requestedRoles.isEmpty()) {
            roles.add(findRole(Erole.ROLE_USER));
            return roles;
        }
        for (String requested : requestedRoles) {
            Erole erole = "admin".equalsIgnoreCase(requested) ? Erole.ROLE_ADMIN : Erole.ROLE_USER;
            roles.add(findRole(erole));
        }
        return roles;
    }

    private Role findRole(Erole erole) {
        return roleRepository.findByName(erole)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Role is not found."));
    }

    public void deleteUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        userRepository.deleteById(userId);
    }

    public UserDTO update(UserUpdateRequest request, Long userId) {
        Users existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        existingUser.setLastname(request.getLastname());
        existingUser.setUsername(request.getUsername());
        existingUser.setEmail(request.getEmail());
        existingUser.setPhone(request.getPhone());

        Users saved = userRepository.save(existingUser);
        return modelMapper.map(saved, UserDTO.class);
    }
}
