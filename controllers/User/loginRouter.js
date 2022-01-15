const express = require('express');
const createLogin = require('./createLogin');
const {
  validateEmail,
  validatePass,
} = require('../../middlewares/userValidate');

const router = express.Router({ mergeParams: true });

router.post('/', validateEmail, validatePass, createLogin);

module.exports = router;
