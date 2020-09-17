const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const url = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    // if (process.env.NODE_ENV !== "test")
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.disconnectDB = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.log(err.message);
  }
};
