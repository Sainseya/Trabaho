-- roles.name had no uniqueness guarantee, which let duplicate ROLE_USER/ROLE_ADMIN
-- rows slip in (observed when a manually-seeded dev database was baselined on top
-- of V2). De-duplicate first (keep the lowest id per name, repointing any
-- user_roles references), then enforce uniqueness so this can't happen again.

DELETE FROM user_roles ur
USING roles r
WHERE ur.role_id = r.id
  AND r.id NOT IN (SELECT MIN(id) FROM roles GROUP BY name)
  AND NOT EXISTS (
      SELECT 1 FROM user_roles ur2
      WHERE ur2.user_id = ur.user_id
        AND ur2.role_id = (SELECT MIN(id) FROM roles r2 WHERE r2.name = r.name)
  );

UPDATE user_roles ur
SET role_id = (SELECT MIN(r2.id) FROM roles r2 WHERE r2.name = (SELECT name FROM roles r WHERE r.id = ur.role_id))
WHERE ur.role_id NOT IN (SELECT MIN(id) FROM roles GROUP BY name);

DELETE FROM roles WHERE id NOT IN (SELECT MIN(id) FROM roles GROUP BY name);

ALTER TABLE ONLY roles ADD CONSTRAINT roles_name_key UNIQUE (name);
