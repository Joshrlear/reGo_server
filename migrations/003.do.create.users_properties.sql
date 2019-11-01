CREATE TABLE users_properties (
    user_id INT REFERENCES users(id),
    property_id INT REFERENCES properties(id),
    PRIMARY KEY (user_id, property_id)
)