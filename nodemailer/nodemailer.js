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
const infinitiTransporter = nodemailer.createTransport({
  host: "onlinemail1.dtbafrica.com", // your SMTP server
  port: 587, // the port for secure connections
  secureConnection: false,
  auth: {
    user: process.env.INFINITI_EMAIL_USER, // your email address
    pass: process.env.INFINITI_PASSWORD, // your password
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
  to = "mutuastanley03@gmail.com"
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

module.exports.replyEmail = (to) => {
  const reply = {
    from: "info@astraafrica.co",
    to,
    subject: "Message Recived",
    html: "We have recived your message and we will get back to you as soon as possible.",
  };
  transporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
module.exports.infinitiEmail = (email, name, phoneNumber) => {
  const reply = {
    from: "info@infinitiafrica.co",
    to: "mutuastanley03@gmail.com",
    subject: "Potential Customer",
    html: `<p>${name} is intrested in Infiniti africa</p> <br> <p> Email: ${email}</p> <br> <p> Phone Number: ${phoneNumber}</p>`,
  };
  infinitiTransporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
