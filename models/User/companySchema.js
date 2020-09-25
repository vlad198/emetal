const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  _id: false,
  CUI: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  verifyAdmin: {
    type: Boolean,
    default: false,
  },
});
