const User = require("../models/User/User");
const bcrypt = require("bcrypt");
const {
  individualRegisterValidation,
  companyRegisterValidation,
  adminRegisterValidation,
  loginValidation,
} = require("../utils/validation");
const {
  createVerifyToken,
  verifyJWTtoken,
  createAccessToken,
  createRefreshToken,
} = require("../utils/handleToken");
const transporter = require("../config/nodemailer");

// NOTE: REGISTER

const register = async (req, res) => {
  // validate input data
  let error;

  switch (req.body.role) {
    case "individual":
      error = individualRegisterValidation(req.body).error;
      break;
    case "company":
      error = companyRegisterValidation(req.body).error;
      break;
    case "admin":
      error = adminRegisterValidation(req.body).error;
      break;
    default:
      return res.status(400).send("Invalid role");
  }

  if (error) return res.status(400).send(error.details[0].message);

  //checking if the user is already in the database

  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) return res.status(400).send("Email already exists");

  const { name, email, password, role } = req.body;

  // create new User

  const newUser = new User(req.body);

  // generate verify token
  const verifyToken = createVerifyToken(
    newUser._id,
    process.env.VERIFY_TOKEN_SECRET
  );

  const link = `http://${req.get("host")}/api/auth/verify/${verifyToken}`;

  const html = `Hello ${newUser.email}, <br><br> Please click on the link to verify your email.<br><a href="${link}">Click here to verify</a>`;

  try {
    await newUser.save();
    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "vladalin123456@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `${html}`,
    });

    res.status(201).send({ _id: newUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
};

// NOTE: VERIFY EMAIL

const verifyEmail = async (req, res) => {
  const token = req.params.token;
  try {
    // get _id from token
    const payload = verifyJWTtoken(token, process.env.VERIFY_TOKEN_SECRET);

    // update user
    await User.findOneAndUpdate(
      { _id: payload._id },
      { $set: { verifyEmail: true } }
    );

    res.status(201).send("Account verified");
  } catch (err) {
    res.status(400).send(err);
  }
};

// NOTE: VERIFY ACCOUNT BY ADMIN

const verifyAdmin = async (req, res) => {
  const _id = req.header("_id");
};

// NOTE: LOGIN

const login = async (req, res) => {
  // validate data
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // find user email
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("Invalid credentials");

  // check if account is verified
  if (!user.verifyEmail)
    return res.status(400).send("Please verify your email.");

  // check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).send("Invalid credentials");

  // create accessToken and refreshToken

  const accessToken = createAccessToken(
    user._id,
    process.env.ACCESS_TOKEN_SECRET
  );

  const refreshToken = createRefreshToken(
    user._id,
    process.env.REFRESH_TOKEN_SECRET
  );

  const {
    _id,
    email,
    role,
    phone,
    individualInfo,
    companyInfo,
    adminInfo,
  } = user;

  res.cookie("refreshToken", refreshToken, { httpOnly: true }).send({
    accessToken,
    user: {
      _id,
      email,
      role,
      phone,
      individualInfo,
      companyInfo,
      adminInfo,
    },
  });
};

const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) return res.status(400).send("Access denied");

  // try to decode token

  let payload;

  try {
    payload = verifyJWTtoken(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.status(400).send("Access denied.");
  }

  const user = await User.findById(payload._id).select("-password");

  // there

  if (!user) return res.status(400).send("Access denied.");

  const newRefreshToken = createAccessToken(
    payload._id,
    process.env.ACCESS_TOKEN_SECRET
  );
  const newAccessToken = createRefreshToken(
    payload._id,
    process.env.REFRESH_TOKEN_SECRET
  );

  res
    .cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    })
    .send({
      accessToken: newAccessToken,
      user,
    });
};

const authenticated = async (req, res) => {
  try {
    const user = await User.findById(req._id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const logout = (req, res) => {
  res
    .cookie("refreshToken", "", { httpOnly: true, maxAge: 0 })
    .send("Logged Out");
};

module.exports = {
  register,
  verifyEmail,
  login,
  refreshToken,
  authenticated,
  logout,
};
