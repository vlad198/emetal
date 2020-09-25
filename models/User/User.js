const mongoose = require("mongoose");
const adminSchema = require("./adminSchema");
const individualSchema = require("./individualSchema");
const companySchema = require("./companySchema");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 30,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 30,
  },
  verifyEmail: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["individual", "company", "admin"],
    required: true,
  },
  individualInfo: individualSchema,
  companyInfo: companySchema,
  adminInfo: adminSchema,
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
