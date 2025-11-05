const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// const sendMail =  transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`,
//     to,
//     subject,
//     html,
// })

 const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `${process.env.EMAIL_USER}`,
      to,
      subject,
      html,
  })  
  console.log("Email sent: " + info.response);
  return info;
  
  } catch (error) {
    console.error("Error sending email: ", error);
  }
 }

module.exports = { sendMail };
