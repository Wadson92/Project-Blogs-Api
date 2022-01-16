const { Categories } = require('../../models');
require('dotenv').config();

module.exports = (async (req, res, next) => {
  try {
    const { name } = req.body;
    const { dataValues: { id } } = await Categories.create({ name });

    return res.status(201).json({ id, name });
  } catch (error) {
    next(error);
  }
});
