package com.example.trabaho;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * End-to-end check that the whole stack (Flyway migrations, seeded roles,
 * JWT auth, refresh tokens, and the /jobsApplication ownership scoping)
 * actually works together against a real Postgres, not just in isolation.
 */
@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AuthFlowIntegrationTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    @Autowired
    private TestRestTemplate restTemplate;

    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    void signupThenSigninReturnsAnAccessTokenAndARefreshToken() throws Exception {
        ResponseEntity<String> signup = restTemplate.postForEntity("/api/auth/signup",
                jsonEntity("""
                        {"username":"alice","email":"alice@example.com","password":"password123"}
                        """),
                String.class);
        assertThat(signup.getStatusCode()).isEqualTo(HttpStatus.OK);

        ResponseEntity<String> signin = restTemplate.postForEntity("/api/auth/signin",
                jsonEntity("""
                        {"username":"alice","password":"password123"}
                        """),
                String.class);
        assertThat(signin.getStatusCode()).isEqualTo(HttpStatus.OK);

        JsonNode body = mapper.readTree(signin.getBody());
        assertThat(body.get("accessToken").asText()).isNotBlank();
        assertThat(body.get("refreshToken").asText()).isNotBlank();
        assertThat(body.get("roles").toString()).contains("ROLE_USER");
    }

    @Test
    void signupIgnoresAnyClientSuppliedRoleAndAlwaysGrantsRoleUserOnly() throws Exception {
        restTemplate.postForEntity("/api/auth/signup",
                jsonEntity("""
                        {"username":"wannabeadmin","email":"wannabe@example.com","password":"password123","role":["admin"]}
                        """),
                String.class);

        ResponseEntity<String> signin = restTemplate.postForEntity("/api/auth/signin",
                jsonEntity("""
                        {"username":"wannabeadmin","password":"password123"}
                        """),
                String.class);

        JsonNode body = mapper.readTree(signin.getBody());
        assertThat(body.get("roles").toString()).doesNotContain("ROLE_ADMIN");
    }

    @Test
    void jobsIsPubliclyReadableWithoutAuthentication() {
        ResponseEntity<String> response = restTemplate.getForEntity("/jobs", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void jobsApplicationMeOnlyReturnsTheCallersOwnApplications() throws Exception {
        restTemplate.postForEntity("/api/auth/signup",
                jsonEntity("""
                        {"username":"carol","email":"carol@example.com","password":"password123"}
                        """),
                String.class);
        ResponseEntity<String> signin = restTemplate.postForEntity("/api/auth/signin",
                jsonEntity("""
                        {"username":"carol","password":"password123"}
                        """),
                String.class);
        String accessToken = mapper.readTree(signin.getBody()).get("accessToken").asText();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        ResponseEntity<String> mine = restTemplate.exchange("/jobsApplication/me",
                org.springframework.http.HttpMethod.GET, new HttpEntity<>(headers), String.class);

        assertThat(mine.getStatusCode()).isEqualTo(HttpStatus.OK);

        // A regular user must not reach the admin-wide listing.
        ResponseEntity<String> all = restTemplate.exchange("/jobsApplication",
                org.springframework.http.HttpMethod.GET, new HttpEntity<>(headers), String.class);
        assertThat(all.getStatusCode()).isEqualTo(HttpStatus.FORBIDDEN);
    }

    @Test
    void logoutAfterARealSigninSucceedsInsteadOf500ing() throws Exception {
        // Regression test: RefreshTokenService.deleteByUserId() calls a derived
        // @Modifying delete query, which throws TransactionRequiredException if
        // invoked outside a @Transactional boundary. This only surfaces once a
        // refresh token row actually exists to delete (a brand-new user has none,
        // so the bug was invisible on signup/signin alone).
        restTemplate.postForEntity("/api/auth/signup",
                jsonEntity("""
                        {"username":"dave","email":"dave@example.com","password":"password123"}
                        """),
                String.class);
        ResponseEntity<String> signin = restTemplate.postForEntity("/api/auth/signin",
                jsonEntity("""
                        {"username":"dave","password":"password123"}
                        """),
                String.class);
        String accessToken = mapper.readTree(signin.getBody()).get("accessToken").asText();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        ResponseEntity<String> logout = restTemplate.exchange("/api/auth/logout",
                org.springframework.http.HttpMethod.POST, new HttpEntity<>(headers), String.class);

        assertThat(logout.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void rolesIsNoLongerAutoExposedBySpringDataRest() {
        ResponseEntity<String> response = restTemplate.getForEntity("/roles", String.class);
        assertThat(response.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.UNAUTHORIZED, HttpStatus.FORBIDDEN);
    }

    private HttpEntity<String> jsonEntity(String json) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new HttpEntity<>(json, headers);
    }
}
