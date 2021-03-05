import { getDB } from "../../../lib/db";

export default async (req, res) => {
  const db = await getDB();
  if (req.method === "DELETE") {
    const {
      query: { cid },
    } = req;

    await db.combos.destroy(cid);

    res.end(`the combo ${cid} has been deleted.`);
  }
};
