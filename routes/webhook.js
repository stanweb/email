const express = require("express");
const router = express.Router();
const { mailCondition } = require("../mailcondition/mailCondition");
const { emailVariables } = require("../nodemailer/nodemailer");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { First_Name, Last_Name, Email, Company_name, Subject, Message } =
    req.body;
  const mailTo = mailCondition(Subject);
  emailVariables(
    Subject,
    First_Name,
    Last_Name,
    Email,
    Company_name,
    Message,
    mailTo
  );
  console.log(First_Name);
  res.status(200).send();
});

module.exports = router;
