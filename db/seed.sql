
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(45) NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(250) NOT NULL
)

CREATE TABLE combos (
    combo_id SERIAL PRIMARY KEY, 
    combo_details JSON NOT NULL,
    user_id INT REFERENCES users(user_id)
)

CREATE TABLE saved (
    id SERIAL PRIMARY KEY,
    following_user_id INT REFERENCES users(user_id),
    saved_post_id INT REFERENCES combos(combo_id)
)
