const express = require('express');
const createBlogPosts = require('./createBlogPosts');
const auth = require('../../middlewares/auth');
const {
  validateTitle,
  validateContent,
  validateCategory,
} = require('../../middlewares/blogPostsValidate');

const router = express.Router({ mergeParams: true });

router.post('/', validateTitle, validateContent, validateCategory, auth, createBlogPosts);

module.exports = router;
