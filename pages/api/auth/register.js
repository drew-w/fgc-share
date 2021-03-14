import bcrypt from "bcrypt";
import withSession from "../../../lib/session";
import db from "../../../lib/prisma";

export default withSession(async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const [userByUsername, userByEmail] = await Promise.all([
      db.users.findFirst({
        where: { username: username },
      }),
      db.users.findFirst({
        where: { email: email },
      }),
    ]);

    if (userByUsername) {
      return res.status(409).send("Username Taken");
    }
    if (userByEmail) {
      return res.status(409).send("Email already in use.");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const result = await db.users.create({
      data: {
        username,
        email,
        password: hash,
      },
    });
    const user = {
      id: result.user_id,
      email: result.email,
      username: result.username,
    };

    req.session.set("user", user);
    await req.session.save();

    return res.status(200).json(user);
  }
});
