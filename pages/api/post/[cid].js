import db from "../../../lib/prisma";

export default async (req, res) => {
  if (req.method === "DELETE") {
    const {
      query: { cid },
    } = req;

    const cidInt = parseInt(cid, 10);

    await db.combos.delete({
      where: { combo_id: cidInt },
    });

    res.send(`the combo ${cid} has been deleted.`);
  }

  if (req.method === "PUT") {
    const { name, character } = req.body;
    const {
      query: { cid },
    } = req;

    const [selected] = await db.$queryRaw(
      `SELECT * FROM combos WHERE combo_id = ${cid}`
    );

    const cidInt = parseInt(cid, 10);

    await db.combos.update({
      where: { combo_id: cidInt },
      data: {
        combo_details: {
          game: selected.combo_details.game,
          character,
          name,
          inputs: selected.combo_details.inputs,
        },
      },
    });
    res.send(`the combo ${cid} has been updated.`);
  }
};
