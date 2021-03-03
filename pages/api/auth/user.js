import withSession from "../../../lib/session";
import { getDB } from "../../../lib/db";

export default withSession(async (req, res) => {
  const db = await getDB();

  const user = req.session.get("user");
  if (!user) {
    return res.json({ isLoggedIn: false });
  }

  const foundUser = await db.users.findOne({ user_id: user.id });

  if (foundUser) {
    res.json({
      ...user,
      isLoggedIn: true,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});
