const express = require('express');
const auth = require('../../middlewares/auth');
const { validateName } = require('../../middlewares/categoriesValidate');

const createCategory = require('./createCategory');

const router = express.Router({ mergeParams: true });

router.post('/', validateName, auth, createCategory);

module.exports = router;
