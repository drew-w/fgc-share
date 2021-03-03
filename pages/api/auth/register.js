import bcrypt from "bcrypt";
import withSession from "../../../lib/session";
import { getDB } from "../../../lib/db";

export default withSession(async (req, res) => {
  const db = await getDB();

  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const [userByUsername, userByEmail] = await Promise.all([
      db.users.findOne({ username }),
      db.users.findOne({ email }),
    ]);

    if (userByUsername) {
      return res.status(409).send("Username Taken");
    }
    if (userByEmail) {
      return res.status(409).send("Email already in use.");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const result = await db.users.insert({
      username,
      email,
      password: hash,
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
