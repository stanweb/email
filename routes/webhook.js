const express = require("express");
const router = express.Router();
const { mailCondition } = require("../mailcondition/mailCondition");
const { emailVariables } = require("../nodemailer/nodemailer");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { FirstName, LastName, Email, Companyname, Subject, Message } =
    req.body;
  const mailTo = mailCondition(Subject);
  emailVariables(
    Subject,
    FirstName,
    LastName,
    Email,
    Companyname,
    Message,
    mailTo
  );
  console.log(First_Name);
  res.status(200).send();
});

module.exports = router;
