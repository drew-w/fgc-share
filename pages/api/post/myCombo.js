import db from "../../../lib/prisma";

export default async (req, res) => {
  if (req.method === "GET") {
    const { ID } = req.query;

    const combos = await db.$queryRaw(
      `select * from combos where user_id = ${ID} order by combo_id desc`
      // [1]
    );
    return res.status(200).send(combos);
  }
};
