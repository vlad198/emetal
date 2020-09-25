const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  _id: false,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
