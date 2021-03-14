import bcrypt from "bcrypt";
import withSession from "../../../lib/session";
import db from "../../../lib/prisma";

export default withSession(async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = await db.users.findFirst({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).send("Incorrect Email or Password");
    }

    const isAuth = bcrypt.compareSync(password, user.password);
    if (!isAuth) {
      return res.status(403).send("Incorrect Email or Password");
    } else {
      const setUser = {
        id: user.user_id,
        email: user.email,
        username: user.username,
      };
      req.session.set("user", setUser);
      await req.session.save();

      return res.status(200).json(user);
    }
  }
});
