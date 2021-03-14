import db from "../../../lib/prisma";

export default async (req, res) => {
  if (req.method === "POST") {
    const { combo_id, currentUser } = req.body;
    const { id } = currentUser;

    const savedPost = await db.saved.create({
      data: {
        following_user_id: id,
        saved_post_id: combo_id,
      },
    });

    console.log(savedPost);

    return res
      .status(200)
      .send(`the post with id ${combo_id} has been saved by user ${id}`);
  }

  if (req.method === "DELETE") {
    const { combo_id, currentUser } = req.body;
    const { id } = currentUser;
    // console.log(combo_id, currentUser);

    await db.$queryRaw(
      `DELETE FROM saved WHERE following_user_id = ${id} AND saved_post_id = ${combo_id}`
      // [1]
    );

    return res
      .status(200)
      .send(`the post with id ${combo_id} has been unsaved by user ${id}`);
  }

  if (req.method === "GET") {
    const { ID } = req.query;

    const isSaved = await db.$queryRaw(
      `SELECT * FROM saved WHERE following_user_id = ${ID}`
    );

    // console.log(isSaved);

    return res.status(200).send(isSaved);
  }
};
