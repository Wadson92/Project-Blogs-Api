const { Users } = require('../models');

const testEmail = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/i;

const validateDisplay = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  if (!testEmail.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const validatePass = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const verifyEmail = await Users.findOne({ where: { email } });
  if (verifyEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

module.exports = {
  validateDisplay,
  validateEmail,
  validatePass,
  emailExists,
};
