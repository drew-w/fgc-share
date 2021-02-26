require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env


//Middleware
app.use(express.json)
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*24}
}))

//Database connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})

//Endpoints

//Auth endpoints
