import db from "../../../lib/prisma";

export default async (req, res) => {
  if (req.method === "GET") {
    const { ID } = req.query;

    let isSaved = await db.$queryRaw(
      `SELECT 
        users.user_id,
        combos.combo_details
    FROM users
    JOIN saved  
      ON users.user_id = saved.following_user_id
    JOIN combos
      ON combos.combo_id = saved.saved_post_id
      WHERE users.user_id = ${ID}`
    );

    console.log(isSaved);

    // const usersSaved = isSaved.filter((post) => post.user_id === ID);

    return res.status(200).send(isSaved);
  }
};
