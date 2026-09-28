package com.example.trabaho.service;

import com.example.trabaho.dto.UserDTO;
import com.example.trabaho.model.Erole;
import com.example.trabaho.model.Role;
import com.example.trabaho.model.Users;
import com.example.trabaho.payload.request.UserCreateRequest;
import com.example.trabaho.repository.RoleRepository;
import com.example.trabaho.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private RoleRepository roleRepository;
    @Mock
    private PasswordEncoder passwordEncoder;

    private UserService userService;

    @BeforeEach
    void setUp() {
        userService = new UserService(userRepository, roleRepository, passwordEncoder, new ModelMapper());
    }

    @Test
    void createEncodesThePasswordAndDefaultsToRoleUser() {
        UserCreateRequest request = new UserCreateRequest();
        request.setUsername("bob");
        request.setEmail("bob@example.com");
        request.setPassword("plaintext-password");

        when(userRepository.existsByUsername("bob")).thenReturn(false);
        when(userRepository.existsByEmail("bob@example.com")).thenReturn(false);
        when(passwordEncoder.encode("plaintext-password")).thenReturn("hashed-password");
        when(roleRepository.findByName(Erole.ROLE_USER)).thenReturn(Optional.of(new Role(Erole.ROLE_USER)));
        when(userRepository.save(any(Users.class))).thenAnswer(invocation -> invocation.getArgument(0));

        UserDTO created = userService.create(request);

        ArgumentCaptor<Users> savedUser = ArgumentCaptor.forClass(Users.class);
        verify(userRepository).save(savedUser.capture());

        assertThat(savedUser.getValue().getPassword()).isEqualTo("hashed-password");
        assertThat(savedUser.getValue().getRoles())
                .extracting(Role::getName)
                .containsExactly(Erole.ROLE_USER);
        assertThat(created.getUsername()).isEqualTo("bob");
    }

    @Test
    void createGrantsAdminRoleOnlyWhenExplicitlyRequested() {
        UserCreateRequest request = new UserCreateRequest();
        request.setUsername("root");
        request.setEmail("root@example.com");
        request.setPassword("plaintext-password");
        request.setRoles(Set.of("admin"));

        when(passwordEncoder.encode(anyString())).thenReturn("hashed");
        when(roleRepository.findByName(Erole.ROLE_ADMIN)).thenReturn(Optional.of(new Role(Erole.ROLE_ADMIN)));
        when(userRepository.save(any(Users.class))).thenAnswer(invocation -> invocation.getArgument(0));

        userService.create(request);

        ArgumentCaptor<Users> savedUser = ArgumentCaptor.forClass(Users.class);
        verify(userRepository).save(savedUser.capture());
        assertThat(savedUser.getValue().getRoles())
                .extracting(Role::getName)
                .containsExactly(Erole.ROLE_ADMIN);
    }

    @Test
    void createRejectsADuplicateUsername() {
        UserCreateRequest request = new UserCreateRequest();
        request.setUsername("bob");
        request.setEmail("bob@example.com");
        request.setPassword("plaintext-password");

        when(userRepository.existsByUsername("bob")).thenReturn(true);

        assertThatThrownBy(() -> userService.create(request))
                .isInstanceOf(ResponseStatusException.class)
                .hasMessageContaining("already taken");

        verify(userRepository, never()).save(any());
    }

    @Test
    void updateThrowsNotFoundInsteadOfError() {
        when(userRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> userService.update(null, 99L))
                .isInstanceOf(ResponseStatusException.class)
                .hasMessageContaining("User not found");
    }
}
