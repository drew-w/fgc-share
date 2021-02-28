// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {db} = require("../../lib/db");
const test = require('../../test')

export default async (req, res) => {
  const data =  await db
  const tables = data.listTables()
  console.log(tables)
  res.status(200).json(tables);
};
