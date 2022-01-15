const express = require('express');
const createUser = require('./createUser');
const {
  emailExists,
  validateDisplay, validateEmail, validatePass } = require('../../middlewares/userValidate');

const router = express.Router({ mergeParams: true });

router.post('/', validateDisplay, validateEmail, validatePass, emailExists, createUser);

module.exports = router;
