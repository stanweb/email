const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "onlinemail1.dtbafrica.com", // your SMTP server
  port: 587, // the port for secure connections
  secureConnection: false,
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.PASSWORD, // your password
  },
  tls: { rejectUnauthorized: false },
});
module.exports.emailVariables = (
  subject,
  firstname,
  lastname,
  email,
  companyname,
  message,
  to = "digitalandinovation@dtbafrica.com"
) => {
  const mailOptions = {
    from: "info@astraafrica.co", // sender address
    to, // list of receivers
    subject, // subject line
    html: ` <p> Name: ${firstname} ${lastname}</p> <br> <p>Email: ${email}</p> <br> <p>Company name: ${companyname}</p> <br> <p>Message: ${message}</p>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
