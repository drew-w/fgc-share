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
    const { name, character } = req.body;
    const {
      query: { cid },
    } = req;

    console.log(name, character, cid);

    const [selected] = await db.query(
      `SELECT * FROM combos WHERE combo_id = ${cid}`
    );

    const editedCombo = {
      game: selected.combo_details.game,
      character,
      name,
      inputs: selected.combo_details.inputs,
    };

    await db.combos.update({ combo_id: cid }, { combo_details: editedCombo });
    res.send(`the combo ${cid} has been updated.`);
  }
};

// const criteria = {
//   user_id: userId
// }

// const changes = {
//   last_login: currentTimestamp
// }

// const options = {
//   single: true
// }

// req.app.get(constants.db).users.update(criteria, changes, options)
