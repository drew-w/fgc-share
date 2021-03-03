const bcrypt = require("bcryptjs");
const session = require("express-session");
const {db} = require("../../../lib/db");

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    const [resultUsername] = await db.user.find_user_by_username([username]);
    // const [resultEmail] = await db.user.find_user_by_email([email]);
    // if (resultUsername) {
    //   return res.status(409).send("Username Taken");
    // }
    // if (resultEmail) {
    //   return res.status(409).send("Email already in use.");
    // }
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(password, salt);
    // const user = await db.user.create_user([email, username, hash]);

    // console.log(user)
    return res.status(200).send(db)
    // session.user = {
    //   id: user.id,
    //   email: user.email,
    //   username: user.username,
    // };
    // session.save((err) => console.log(err));
    // return res.status(201).send(session.user);
  }
};
