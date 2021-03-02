const bcrypt = require("bcrypt");
const session = require("express-session");

module.exports = {
  register: async (req, res) => {
    const { username, email, password } = req.body;
    const [resultUsername] = await req.app
      .get(db)
      .user.find_user_by_username([username]);
    const [resultEmail] = await req.app
      .get(db)
      .user.find_user_by_email([email]);
    if (resultUsername) {
      return res.status(409).send("Username Taken");
    }
    if (resultEmail) {
      return res.status(409).send("Email already in use.");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [user] = await req.app
      .get(db)
      .user.create_user([email, username, hash]);
    session.user = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    session.save((err) => console.log(err));
    return res.status(201).send(session.user);
  },
};
