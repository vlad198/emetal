const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  // service : "gmail",
  host: "smtp.ethereal.email", // "smtp.gmail.com"
  port: 587,
  auth: {
    user: "alexzander.heathcote79@ethereal.email",
    pass: "TjPcMcmsbvFXQc1S7c",
  },
});
