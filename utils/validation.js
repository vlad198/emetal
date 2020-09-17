const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

// REGISTER VALIDATION

module.exports.registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(30).required(),
    email: Joi.string().min(6).max(30).required().lowercase().email(),
    password: Joi.string().min(6).max(30).required(),
    role: Joi.string().required().valid("admin", "user"),
  });
  return schema.validate(data);
};

module.exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(30).required().lowercase().email(),
    password: Joi.string().min(6).max(30).required(),
  });
  return schema.validate(data);
};
