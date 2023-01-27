module.exports.mailCondition = (interest) => {
  if (interest === "Tariff Guide" || interest === "Astra API-How to") {
    return "enquiries@astra.ke";
  } else if (interest === "Account Support") {
    return "support@astraafrica.co";
  } else if (
    interest === "Request to go live" ||
    interest === "Access to Sandbox"
  ) {
    return "build@astraafrica.co";
  }
};
