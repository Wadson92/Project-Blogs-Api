const { BlogPost } = require('../../models');
require('dotenv').config();

module.exports = (async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { id: userId } = req.user;
    const { id } = await BlogPost.create({
      title, userId, content, published: new Date(), updated: new Date() });

    const post = { id, userId, title, content };

    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
});
