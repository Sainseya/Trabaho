-- Baseline schema, mirrors what Hibernate (ddl-auto: update) had been generating.
-- From here on, schema changes go through versioned Flyway migrations instead.

CREATE TABLE compagnies (
    compagnies_id bigint NOT NULL,
    compagny_name character varying(255),
    location character varying(255)
);

CREATE SEQUENCE compagnies_compagnies_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE compagnies_compagnies_id_seq OWNED BY compagnies.compagnies_id;

CREATE TABLE jobs (
    jobs_id bigint NOT NULL,
    description character varying(255),
    expectation character varying(255),
    location character varying(255),
    period character varying(255),
    place character varying(255),
    role character varying(255),
    salary integer,
    tags character varying(255),
    title character varying(255),
    compagnies_id bigint
);

CREATE SEQUENCE jobs_jobs_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE jobs_jobs_id_seq OWNED BY jobs.jobs_id;

CREATE TABLE jobs_application (
    application_id bigint NOT NULL,
    jobs_id bigint,
    user_id bigint
);

CREATE SEQUENCE jobs_application_application_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE jobs_application_application_id_seq OWNED BY jobs_application.application_id;

CREATE TABLE roles (
    id bigint NOT NULL,
    name character varying(20)
);

CREATE SEQUENCE roles_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE roles_id_seq OWNED BY roles.id;

CREATE TABLE skills (
    skills_id bigint NOT NULL,
    name character varying(255),
    user_id bigint
);

CREATE SEQUENCE skills_skills_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE skills_skills_id_seq OWNED BY skills.skills_id;

CREATE TABLE user_roles (
    user_id bigint NOT NULL,
    role_id bigint NOT NULL
);

CREATE TABLE users (
    user_id bigint NOT NULL,
    email character varying(255),
    lastname character varying(255),
    password character varying(255),
    phone character varying(255),
    username character varying(255)
);

CREATE SEQUENCE users_user_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE users_user_id_seq OWNED BY users.user_id;

ALTER TABLE ONLY compagnies ALTER COLUMN compagnies_id SET DEFAULT nextval('compagnies_compagnies_id_seq'::regclass);
ALTER TABLE ONLY jobs ALTER COLUMN jobs_id SET DEFAULT nextval('jobs_jobs_id_seq'::regclass);
ALTER TABLE ONLY jobs_application ALTER COLUMN application_id SET DEFAULT nextval('jobs_application_application_id_seq'::regclass);
ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);
ALTER TABLE ONLY skills ALTER COLUMN skills_id SET DEFAULT nextval('skills_skills_id_seq'::regclass);
ALTER TABLE ONLY users ALTER COLUMN user_id SET DEFAULT nextval('users_user_id_seq'::regclass);

ALTER TABLE ONLY compagnies ADD CONSTRAINT compagnies_pkey PRIMARY KEY (compagnies_id);
ALTER TABLE ONLY jobs_application ADD CONSTRAINT jobs_application_pkey PRIMARY KEY (application_id);
ALTER TABLE ONLY jobs ADD CONSTRAINT jobs_pkey PRIMARY KEY (jobs_id);
ALTER TABLE ONLY roles ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY skills ADD CONSTRAINT skills_pkey PRIMARY KEY (skills_id);
ALTER TABLE ONLY users ADD CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);
ALTER TABLE ONLY users ADD CONSTRAINT ukr43af9ap4edm43mmtq01oddj6 UNIQUE (username);
ALTER TABLE ONLY user_roles ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);
ALTER TABLE ONLY users ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);

ALTER TABLE ONLY jobs_application ADD CONSTRAINT fk920tr0pj8gy9tw1wo2y2i40on FOREIGN KEY (jobs_id) REFERENCES jobs(jobs_id);
ALTER TABLE ONLY jobs_application ADD CONSTRAINT fkg9x3bxcqnp5279nhher05v6oq FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE ONLY user_roles ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES roles(id);
ALTER TABLE ONLY user_roles ADD CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE ONLY skills ADD CONSTRAINT fko8dhr4cqp5nowj5o9km5fjhaq FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE ONLY jobs ADD CONSTRAINT fkoveo0np3n5avffuhn6sft6a42 FOREIGN KEY (compagnies_id) REFERENCES compagnies(compagnies_id);
