CREATE TABLE refresh_tokens (
    id bigint NOT NULL,
    token character varying(255) NOT NULL,
    expiry_date timestamp(6) without time zone NOT NULL,
    user_id bigint NOT NULL
);

CREATE SEQUENCE refresh_tokens_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE refresh_tokens_id_seq OWNED BY refresh_tokens.id;
ALTER TABLE ONLY refresh_tokens ALTER COLUMN id SET DEFAULT nextval('refresh_tokens_id_seq'::regclass);

ALTER TABLE ONLY refresh_tokens ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);
ALTER TABLE ONLY refresh_tokens ADD CONSTRAINT refresh_tokens_token_key UNIQUE (token);
ALTER TABLE ONLY refresh_tokens ADD CONSTRAINT refresh_tokens_user_id_key UNIQUE (user_id);
ALTER TABLE ONLY refresh_tokens ADD CONSTRAINT fk_refresh_tokens_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;
