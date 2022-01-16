const { Categories } = require('../../models');

module.exports = async (req, res) => {
  try {
    const allCategory = await Categories.findAll({ attributes: ['id', 'name'] });
    console.log(allCategory);
    return res.status(200).json(allCategory);
  } catch (error) {
    res.status(401).json(error);
  }
};
