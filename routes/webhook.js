const express = require("express");
const router = express.Router();
const { mailCondition } = require("../mailcondition/mailCondition");
const {
  astraEmail,
  conactUs,
  community,
  waitlist,
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
  astraEmail(subject, firstName, lastName, email, companyName, message, mailTo);
  res.status(200).send();
});
router.post("/contactUs", (req, res) => {
  const {
    et_pb_contact_firstname_0: firstName,
    et_pb_contact_lastname_0: lastName,
    et_pb_contact_email_0: email,
    et_pb_contact_message_0: message,
  } = req.body;
  conactUs(email, firstName, lastName, message);
  console.log(req.body);
  res.status(200).send();
});
router.post("/community", (req, res) => {
  const {
    et_pb_contact_firstname_0: firstName,
    et_pb_contact_lastname_0: lastName,
    et_pb_contact_businessname_0: businessName,
    et_pb_contact_phonenumber_0: phoneNumber,
    et_pb_contact_email_0: email,
    et_pb_contact_description_0: businessDescription,
  } = req.body;
  community(
    email,
    firstName,
    lastName,
    phoneNumber,
    businessName,
    businessDescription
  );
  res.status(200).send();
});

router.post("/waitlist", (req, res) => {
  const {
    et_pb_contact_name_0: name,
    et_pb_contact_phonenumber_0: phoneNumber,
    et_pb_contact_email_0: email,
  } = req.body;
  waitlist(email, name, phoneNumber);
  res.status(200).send();
});

module.exports = router;
