const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
const massive = require("massive");
// const express = require("express");
// const session = require("express-session");

// const app = express();

// app.use(express.json());

// app.use(
//   session({
//     secret: SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     cookie: { maxAge: null, secure: false },
//   })
// );
let db = null;

export const getDB = async function () {
  if (db === null) {
    db = await massive({
      connectionString: CONNECTION_STRING,
      ssl: { rejectUnauthorized: false },
    });
  }

  return db;
};
