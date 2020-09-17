const express = require("express");
const { connectDB } = require("./config/DB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AuthRouter = require("./routers/AuthRouter");
const path = require("path");

const app = express();

// if (process.env.NODE_ENV !== "test")
connectDB();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./emetal-client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client" + "build" + "index.html"));
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", AuthRouter);

module.exports = app;
