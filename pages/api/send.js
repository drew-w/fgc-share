const nodemailer = require("nodemailer");

export default async (req, res) => {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "eleazar.moen@ethereal.email",
        pass: "y9d97VgenF4NpYwx3x",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"FGC Share" <eleazar.moen@ethereal.email>', // sender address
      to: "eesnamdoow@gmail.com", // list of receivers
      subject: "Password Recovery", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("success");
  }
};
