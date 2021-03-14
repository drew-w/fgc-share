import withSession from "../../../lib/session";
import db from "../../../lib/prisma";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  if (!user) {
    return res.json({ isLoggedIn: false });
  }

  const foundUser = await db.users.findFirst({
    where: { user_id: user.id },
  });

  if (foundUser) {
    res.json({
      ...user,
      isLoggedIn: true,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});
