import db from "../../../lib/prisma";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, game, character, inputs, id } = req.body;

    const details = { game, character, name, inputs };

    await db.combos.create({
      data: {
        combo_details: details,
        user_id: id,
      },
    });

    return res.status(200).send(`the combo has been saved`);
  }

  if (req.method === "GET") {
    const combos = await db.$queryRaw(
      "SELECT * FROM combos ORDER BY combo_id DESC"
    );

    return res.status(200).send(combos);
  }
};
