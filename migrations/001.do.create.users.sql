CREATE TABLE users (
    id INT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    date_created TIMESTAMP DEFAULT NOW() NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    license TEXT UNIQUE,
    phone CHAR(11),
    email TEXT,
    street_address TEXT,
    city text,
    state_code CHAR(2),
    zip_code TEXT
)