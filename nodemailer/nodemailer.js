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
module.exports.astraEmail = (
  subject,
  firstname,
  lastname,
  email,
  companyname,
  message,
  to = "mutuastanley03@gmail.com"
) => {
  const mailOptions = {
    from: "info@astraafrica.co",
    to,
    replyTo: to,
    subject,
    html: ` <p> Name: ${firstname} ${lastname}</p> <p>Email: ${email}</p> <p>Company name: ${companyname}</p> <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports.conactUs = (email, firstName, lastName, message) => {
  const reply = {
    from: "info@infinitiafrica.co",
    to: "knduru@dtbafrica.com",
    replyTo: email,
    subject: "Infiniti Message",
    html: `<p>Customer Name: ${firstName} ${lastName}</p> <p> Customer Email: ${email}</p> <p> Message: ${message}</p>`,
  };
  infinitiTransporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports.community = (
  email,
  firstName,
  lastName,
  phoneNumber,
  businessName,
  businessDescription
) => {
  const reply = {
    from: "info@infinitiafrica.co",
    to: "community@infinitiafrica.co",
    replyTo: email,
    subject: "Request To Join Community",
    html: `
    <p>Customer Name: ${firstName} ${lastName}</p>
     <p> Customer Email: ${email}</p>
      <p>Business Name: ${businessName}</p>
      <p> Business Description: ${businessDescription}</p>
      <p> Phone Number: ${phoneNumber}</p>
    `,
  };
  infinitiTransporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports.waitlist = (email, name, phoneNumber) => {
  const reply = {
    from: "info@infinitiafrica.co",
    // to: "productcomms@dtbafrica.com",
    to: "mutuastanley04@gmail.com",
    replyTo: email,
    subject: "Infiniti Waitlist",
    html: `<p>Customer Name: ${name}</p> <p> Customer Email: ${email}</p> <p> Customer Phone Number: ${phoneNumber}</p>`,
  };
  infinitiTransporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
