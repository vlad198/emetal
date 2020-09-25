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

module.exports.individualRegisterValidation = (data) => {
  const schema = Joi.object({
    phone: Joi.string().length(10).required(),
    email: Joi.string().max(30).lowercase().required().email(),
    password: Joi.string().min(6).max(30).required(),
    role: Joi.string().valid("individual").required(),
    individualInfo: Joi.object({
      firstName: Joi.string().required().max(30).min(3),
      lastName: Joi.string().required().max(30).min(3),
    }).required(),
  });
  return schema.validate(data);
};

module.exports.companyRegisterValidation = (data) => {
  const schema = Joi.object({
    phone: Joi.string().length(10).required(),
    email: Joi.string().max(30).lowercase().required().email(),
    password: Joi.string().min(6).max(30).required(),
    role: Joi.string().valid("company").required(),
    companyInfo: Joi.object({
      CUI: Joi.string().required(),
      companyName: Joi.string().required(),
    }).required(),
  });
  return schema.validate(data);
};

module.exports.adminRegisterValidation = (data) => {
  const schema = Joi.object({
    phone: Joi.string().length(10).required(),
    email: Joi.string().max(30).lowercase().required().email(),
    password: Joi.string().min(6).max(30).required(),
    role: Joi.string().valid("admin").required(),
    adminInfo: Joi.object({
      firstName: Joi.string().required().max(30).min(3),
      lastName: Joi.string().required().max(30).min(3),
    }).required(),
  });
  return schema.validate(data);
};
