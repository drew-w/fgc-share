import { getDB } from "../../../lib/db";

export default async (req, res) => {
  const db = await getDB();

  if (req.method === "GET") {
    const { ID } = req.query;

    let isSaved = await db.query(
      `SELECT 
        users.user_id,
        combos.combo_details
    FROM users
    JOIN saved  
      ON users.user_id = saved.following_user_id
    JOIN combos
      ON combos.combo_id = saved.saved_post_id`
    );

    const usersSaved = isSaved.filter(
        (post) => post.user_id === ID
    )

    console.log(usersSaved);

    return res.status(200).send(usersSaved);
  }
};
