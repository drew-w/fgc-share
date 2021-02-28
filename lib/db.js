const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
const massive = require("massive");

export const db = massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
});
