const express = require("express");
const router = express.Router();
const { mailCondition } = require("../mailcondition/mailCondition");
const { emailVariables } = require("../nodemailer/nodemailer");

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
  res.status(200).send();
});

module.exports = router;
