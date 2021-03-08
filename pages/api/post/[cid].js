import { getDB } from "../../../lib/db";

export default async (req, res) => {
  const db = await getDB();
  if (req.method === "DELETE") {
    const {
      query: { cid },
    } = req;

    await db.combos.destroy(cid);

    res.send(`the combo ${cid} has been deleted.`);
  }

  if (req.method === "PUT") {
    const {name, character} = req.body

    // await db.combos.update(cid, {

    // });
    console.log(name, character)

    res.send(`the combo has been deleted.`);
  }
};
