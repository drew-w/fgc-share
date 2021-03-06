## MVP

- users can create an account
- users can login
- users can create a post
- users can delete a post
- users can update a post
- users can read all posts
- users can read posts by other users
- users can request an email if they forgot their password

## ICEBOX

- users will be able to select different games for different symbols
- users will be able to assign combos to specific characters
- users will be able to filter post based on game type
- users will be able to filter post based on certain characters
- users will be able to set favorite games and favorite characters, so by default the only posts they will see will be for those characters
- users can follow other users
- embed video to show combo in action

## DATABASE

```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(45) NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(250) NOT NULL
)
```

```SQL
CREATE TABLE combos (
    combo_id SERIAL PRIMARY KEY, 
    combo_details JSON NOT NULL,
    user_id INT REFERENCES users(user_id)
)
```

```SQL
CREATE TABLE saved (
    id SERIAL PRIMARY KEY,
    following_user_id INT REFERENCES users(user_id),
    saved_post_id INT REFERENCES combos(combo_id)
)
```

## SERVER

- Dependencies: 
    - massive (to connect to the sql db)
    - express (writing rest functionality)
    - express-session (giving each user a session)
    - bcrypt (hashing passwords, auth)
    - dotenv (access variables saved in .gitignore)

- File Structure: 
    - server/
        - index.js
        - controllers/
            - authController.js
            - comboController.js

- Endpoints
    - register => `/auth/register`
    - login => `/auth/login`
    - logout => `/auth/logout`
    - getUserSession => `/auth/get_user`
    - getCombos => `/api/combos`
    - deleteCombo => `/api/combos/:id`
    - editCombo => `/api/combos/:id`
    - newCombo => `/api/combos`

## FRONTEND

- Dependancies: 
    - axios
    - redux
    - react-redux
    - redux-promise-middleware
    - chakra
    - @reduxjs/toolkit

- File Structure:
    - pages/
        - _app.js
        - index.js
        - auth.js
        - home.js
        - create.js
        - users/
            - [username].js
        - combos/
            - [combos].js
    - components/
        - header.js
        - darkmodeswitcher.js
        - combobuilder.js
        - combodisplay.js

