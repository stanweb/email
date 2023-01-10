const express = require("express");
const router = express.Router();
const { mailCondition } = require("../mailcondition/mailCondition");
const {
  emailVariables,
  replyEmail,
  infinitiEmail,
  sendPassword,
} = require("../nodemailer/nodemailer");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const {
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    "Company name": companyName,
    Subject: subject,
    Message: message,
  } = req.body;
  const mailTo = mailCondition(subject);
  emailVariables(
    subject,
    firstName,
    lastName,
    email,
    companyName,
    message,
    mailTo
  );
  replyEmail(email);
  res.status(200).send();
});
router.post("/infinity", (req, res) => {
  const {
    Name: name,
    "Phone Number": phoneNumber,
    "Email Address": email,
  } = req.body;
  infinitiEmail(email, name, phoneNumber);
  res.status(200).send();
});

router.post("/sendPassword", (req, res) => {
  const { email, password } = req.body;
  sendPassword(email, password);
  res.status(200).send();
});

module.exports = router;
