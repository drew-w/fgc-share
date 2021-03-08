import { getDB } from "../../../lib/db";

export default async (req, res) => {
  const db = await getDB();

  if (req.method === "GET") {
    const { ID } = req.query;

    console.log(ID);

    const combos = await db.query(
      `select * from combos where user_id = ${ID} order by combo_id desc`
      // [1]
    );
    return res.status(200).send(combos);
  }
};
