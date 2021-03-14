const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
const massive = require("massive");

// let db = null;

// export const getDB = async function () {
//   if (db === null) {
//     db = await massive({
//       connectionString: CONNECTION_STRING,
//       ssl: { rejectUnauthorized: false },
//     });
//   }

//   return db;
// };

let db;

exports = module.exports = function () {
  if (db) {
    return db;
  }

  return massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  }).then((instance) => {
    db = instance;

    return Promise.resolve(db);
  });
};
