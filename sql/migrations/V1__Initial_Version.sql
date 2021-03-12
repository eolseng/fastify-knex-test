CREATE TABLE organizations
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE locations
(
    id              SERIAL PRIMARY KEY,
    organization_id INTEGER      NOT NULL,
    name            VARCHAR(255) NOT NULL,
    CONSTRAINT fk_locations_organizations
        FOREIGN KEY (organization_id)
            REFERENCES organizations (id)
            ON DELETE CASCADE
);

CREATE TABLE kegs
(
    auth_token      VARCHAR(255) PRIMARY KEY,
    organization_id INTEGER      NOT NULL,
    location_id     INTEGER,
    name            VARCHAR(255) NOT NULL,
    CONSTRAINT fk_kegs_organizations
        FOREIGN KEY (organization_id)
            REFERENCES organizations (id)
            ON DELETE CASCADE,
    CONSTRAINT fk_kegs_locations
        FOREIGN KEY (location_id)
            REFERENCES locations (id)
            ON DELETE SET NULL
);

CREATE TABLE keg_telemetry
(
    time           TIMESTAMPTZ      NOT NULL,
    keg_auth_token VARCHAR(255)     NOT NULL,
    weight         DOUBLE PRECISION NOT NULL,
    CONSTRAINT pk_kegtelemetry
        PRIMARY KEY (time, keg_auth_token),
    CONSTRAINT fk_kegtelemetry_kegs
        FOREIGN KEY (keg_auth_token)
            REFERENCES kegs (auth_token)
            ON DELETE CASCADE
);

CREATE INDEX ON keg_telemetry (keg_auth_token, time DESC);