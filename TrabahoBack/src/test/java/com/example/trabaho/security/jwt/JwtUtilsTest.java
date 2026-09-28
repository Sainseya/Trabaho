package com.example.trabaho.security.jwt;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.Assertions.assertThat;

class JwtUtilsTest {

    private JwtUtils jwtUtils;

    @BeforeEach
    void setUp() {
        jwtUtils = new JwtUtils();
        // Any 32-byte-or-longer Base64 string works for HS256; this one is throwaway/test-only.
        ReflectionTestUtils.setField(jwtUtils, "jwtSecret", "dGVzdC1vbmx5LXNlY3JldC1kby1ub3QtdXNlLWluLXByb2Q=");
        ReflectionTestUtils.setField(jwtUtils, "jwtExpirationMs", 60000);
    }

    @Test
    void generatesAndValidatesATokenRoundTrip() {
        String token = jwtUtils.generateTokenFromUsername("alice");

        assertThat(jwtUtils.validateJwtToken(token)).isTrue();
        assertThat(jwtUtils.getUserNameFromJwtToken(token)).isEqualTo("alice");
    }

    @Test
    void rejectsAMalformedToken() {
        assertThat(jwtUtils.validateJwtToken("not-a-jwt")).isFalse();
    }

    @Test
    void rejectsAnExpiredToken() {
        ReflectionTestUtils.setField(jwtUtils, "jwtExpirationMs", -1000);
        String expired = jwtUtils.generateTokenFromUsername("alice");

        assertThat(jwtUtils.validateJwtToken(expired)).isFalse();
    }
}
