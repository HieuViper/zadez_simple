var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "email",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "cskh@zadez.vn",
    pass: "ntnwkaqwlwjqbpzi",
  },
});
const sendMail = async (mail, callback) => {
  try {
    const info = await transporter.sendMail(mail);
    callback(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
};
