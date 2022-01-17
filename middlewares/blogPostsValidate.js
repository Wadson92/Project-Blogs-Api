const { Op } = require('sequelize');
const { Categories } = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
      return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
      return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
      return res.status(400).json({ message: '"categoryIds" is required' });
  }
  console.log(Categories);
  const categories = await Categories.findAll({
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });
  if (categories.length !== categoryIds.length) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategory,
};
