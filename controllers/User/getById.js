const { Users } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const getUserId = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!getUserId) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(getUserId);
  } catch (error) {
    res.status(401).json(error);
  }
};
