import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.GMAIL_NAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendMail = (to, message) => {
    const mailOption = {
        from: process.env.GMAIL_NAME,
        to: to,
        subject: "School Management System Registration OTP verification",
        text: message,
    }

    transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return console.error('Error sending mail:', error);
    }
    console.log('Email sent successfully:', info.response);
  });
}

export default sendMail