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
    user: "DTBKIKOA2\\infoinfiniti", // your email address
    pass: "K9Fk@D&'Bsv41u3r5", // your password
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
    html: ` <p> Name: ${firstname} ${lastname}</p> <br> <p>Email: ${email}</p> <br> <p>Company name: ${companyname}</p> <br> <p>Message: ${message}</p>`,
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
    to: "mutuastanley03@gmail.com",
    replyTo: email,
    subject: "Infiniti",
    html: `<p>Customer Name: ${firstName} ${lastName}</p> <br> <p> Customer Email: ${email}</p> <br> <p> Message: ${message}</p>`,
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
    to: "mutuastanley03@gmail.com",
    replyTo: email,
    subject: "Join Community",
    html: `
    <p>Customer Name: ${firstName} ${lastName}</p>
     <br>
     <p> Customer Email: ${email}</p>
      <br>
      <p>Business Name: ${businessName}</p>
      <p> Business Description: ${businessDescription}</p>
      <br>
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
    to: "mutuastanley03@gmail.com",
    replyTo: email,
    subject: "Infiniti",
    html: `<p>Customer Name: ${name}</p> <br> <p> Customer Email: ${email}</p> <br> <p> Customer Phone Number: ${phoneNumber}</p>`,
  };
  infinitiTransporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
const test = () => {
  const reply = {
    from: "info@infinitiafrica.co",
    to: "knduru@dtbafrica.com",
    subject: "Potential Customer",
    replyTo: "skamau@dtbafrica.com",
    html: `is intrested in Infiniti africa</p> <br> <p> Email:</p> <br> <p> Phone Number:</p>`,
  };
  infinitiTransporter.sendMail(reply, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
