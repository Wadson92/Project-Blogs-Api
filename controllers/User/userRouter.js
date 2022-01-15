const express = require('express');
const createUser = require('./createUser');
const getUser = require('./getUser');
const getById = require('./getById');
const auth = require('../../middlewares/auth');
const {
  emailExists,
  validateDisplay,
  validateEmail,
  validatePass,
} = require('../../middlewares/userValidate');

const router = express.Router({ mergeParams: true });

router.post('/', validateDisplay, validateEmail, validatePass, emailExists, createUser);
router.get('/', auth, getUser);
router.get('/:id', auth, getById);

module.exports = router;
