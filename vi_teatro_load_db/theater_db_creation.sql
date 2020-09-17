DROP TABLE IF EXISTS app_user CASCADE;
DROP TABLE IF EXISTS theater_show CASCADE;
DROP TABLE IF EXISTS show_armchair CASCADE;
DROP TABLE IF EXISTS localite CASCADE;
DROP TABLE IF EXISTS ticket CASCADE;
DROP TABLE IF EXISTS armchair CASCADE;
DROP TABLE IF EXISTS purchase CASCADE;
DROP TABLE IF EXISTS client CASCADE;
DROP TABLE IF EXISTS address CASCADE;

CREATE TABLE app_user
(
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(255),
    email         VARCHAR(255) UNIQUE,
    password      VARCHAR(255),
    type          VARCHAR(255)
);

CREATE TABLE theater_show
(
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER,
    localite_id     INTEGER,
    create_at       TIMESTAMP,
    end_at          TIMESTAMP,
    name            VARCHAR(255),
    prepare_minutes INTEGER
);

CREATE TABLE localite
(
    id         SERIAL PRIMARY KEY,
    address_id INTEGER,
    name       VARCHAR(255)
);

CREATE TABLE show_armchair
(
    id          SERIAL PRIMARY KEY,
    show_id     INTEGER,
    armchair_id INTEGER,
    word        VARCHAR(255),
    number      VARCHAR(255),
    status      VARCHAR(255),
    price       VARCHAR(255)
);

CREATE TABLE armchair
(
    id   SERIAL PRIMARY KEY,
    type VARCHAR(255)
);

CREATE TABLE ticket
(
    id               SERIAL PRIMARY KEY,
    show_armchair_id INTEGER,
    purchase_id      INTEGER,
    client_id        INTEGER,
    type             VARCHAR(255),
    status           VARCHAR(255)
);

CREATE TABLE purchase
(
    id        SERIAL PRIMARY KEY,
    client_id INTEGER,
    status    VARCHAR
);

CREATE TABLE client
(
    id         SERIAL PRIMARY KEY,
    user_id    INTEGER,
    address_id INTEGER,
    cpf        VARCHAR(11) UNIQUE,
    type       VARCHAR(255)
);

CREATE TABLE address
(
    id           SERIAL PRIMARY KEY,
    cep          VARCHAR(8),
    neighborhood VARCHAR(255),
    city         VARCHAR(255),
    state        VARCHAR(255)
);

ALTER TABLE theater_show
    ADD CONSTRAINT user_id_fk
        FOREIGN KEY (user_id)
            REFERENCES app_user (id);

ALTER TABLE theater_show
    ADD CONSTRAINT localite_id_fk
        FOREIGN KEY (localite_id)
            REFERENCES localite (id);

ALTER TABLE localite
    ADD CONSTRAINT address_id_fk
        FOREIGN KEY (address_id)
            REFERENCES address (id);

ALTER TABLE client
    ADD CONSTRAINT user_id_fk
        FOREIGN KEY (user_id)
            REFERENCES app_user (id);

ALTER TABLE client
    ADD CONSTRAINT address_id_fk
        FOREIGN KEY (address_id)
            REFERENCES address (id);

ALTER TABLE ticket
    ADD CONSTRAINT show_armchair_id_fk
        FOREIGN KEY (show_armchair_id)
            REFERENCES show_armchair (id);

ALTER TABLE ticket
    ADD CONSTRAINT purchase_id_fk
        FOREIGN KEY (purchase_id)
            REFERENCES purchase (id);

ALTER TABLE ticket
    ADD CONSTRAINT client_id_fk
        FOREIGN KEY (client_id)
            REFERENCES client (id);

ALTER TABLE show_armchair
    ADD CONSTRAINT show_id_fk
        FOREIGN KEY (show_id)
            REFERENCES theater_show (id);

ALTER TABLE show_armchair
    ADD CONSTRAINT armchair_id_fk
        FOREIGN KEY (armchair_id)
            REFERENCES armchair (id);

ALTER TABLE purchase
    ADD CONSTRAINT client_id_fk
        FOREIGN KEY (client_id)
            REFERENCES client (id);