const express = require("express");
const { connectDB } = require("./config/DB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AuthRouter = require("./routers/AuthRouter");
const path = require("path");

const app = express();

// if (process.env.NODE_ENV === "production") {
// app.use(express.static("../emetal-client/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "../emetal-client/build/index.html"));
// });
// }

// if (process.env.NODE_ENV !== "test")
connectDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", AuthRouter);

app.use(express.static(path.join(__dirname, "emetal-client/build"))); // Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "emetal-client/build", "index.html"));
});

module.exports = app;
