import { getDB } from "../../../lib/db";

export default async (req, res) => {
  const db = await getDB();

  if (req.method === "POST") {
    const { name, game, character, inputs, id } = req.body;

    const details = { game, character, name, inputs };

    db.combos.insert({
      combo_details: details,
      user_id: id,
    });

    return res.status(200);
  }

  if (req.method === "GET") {
    const combos = await db.combos.find(
      {},
    //   {
    //     order: [
    //       {
    //         field: ['combo_id, combo_details, user_id'] ,
    //         direction: "desc",
    //       },
    //     ],
    //   }
    );

    return res.status(200).send(combos);
  }
};
