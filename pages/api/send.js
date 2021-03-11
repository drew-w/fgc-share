const nodemailer = require("nodemailer");
import { getDB } from "../../lib/db";


export default async (req, res) => {
  const db = await getDB();
  if (req.method === "POST") {
    const { email } = req.body;
    console.log(email);

    const [userByEmail] = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    console.log(userByEmail);

    if (!userByEmail) {
      return res.send("user with that email address does not exist");
    }

    const output = `
    <div>
    <p>we deleted your account lmao. make a new one</p>
    </div>
    `;
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "eleazar.moen@ethereal.email",
        pass: "y9d97VgenF4NpYwx3x",
      },
      sendMail: true
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"FGC Share" <eleazar.moen@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: "Password Recovery", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("email has been sent");
  }
};
