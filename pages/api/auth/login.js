const { db } = require("../../../lib/db");
const bcrypt = require("bcryptjs");
const session = require("express-session");

export default async (req, res) => {
  const { email, password } = req.body;
  const [user] = await db.user.find_user_by_email([email]);
  if (!user) {
    return res
      .status(403)
      .send("an account with this email address does not exist");
  }
  const auth = bcrypt.compareSync(password, user.password);
  if (!auth) return res.status(403).send("incorrect password");
  session.user = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  session.save((err) => console.log(err));
  return res.send(session.user);
};
