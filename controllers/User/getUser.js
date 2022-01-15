const { Users } = require('../../models');

module.exports = async (req, res) => {
  try {
    const loginUser = await Users.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return res.status(200).json(loginUser);
  } catch (error) {
    res.status(401).json(error);
  }
};
