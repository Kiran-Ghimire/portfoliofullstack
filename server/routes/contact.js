const router = require("express").Router();
const transporter = require("../nodeMailerSetup");

module.exports = router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  
  console.log(req.body);

  let reply = `
  Name: ${name}
  Email: ${email}
  Message: ${message}`;

  let mail = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL,
    subject: ` ${email}`,
    text: reply,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
        type: "error",
        message: "An Error Occurred.",
      });
    } else {
      res.json({
        type: "success",
        message: "Thankyou for your feedback.",
      });
    }
  });
});

