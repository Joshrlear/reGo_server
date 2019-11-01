ALTER TABLE users
    ADD COLUMN brokerage_id INT REFERENCES brokerages(id)