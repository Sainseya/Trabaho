-- Roles referenced by AuthService.signup()/UserService.create() must exist,
-- otherwise account creation fails with "Role is not found."
INSERT INTO roles (name) VALUES ('ROLE_USER'), ('ROLE_ADMIN');
