const express = require('express');
const auth = require('../../middlewares/auth');
const { validateName } = require('../../middlewares/categoriesValidate');

const createCategory = require('./createCategory');
const getCategory = require('./getCategory');

const router = express.Router({ mergeParams: true });

router.post('/', validateName, auth, createCategory);
router.get('/', auth, getCategory);

module.exports = router;
