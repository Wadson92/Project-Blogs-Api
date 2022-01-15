const jwt = require('jsonwebtoken');
const { Users } = require('../../models');
require('dotenv').config();

module.exports = (async (req, res, next) => {
  try {
    const jwtConfig = {
      expiresIn: '15d',
      algorithm: 'HS256',
    };
    const { email, password } = req.body;
    const userNotExists = await Users.findOne({ where: { email, password } });
    if (!userNotExists) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    const { dataValues: { id, displayName, image } } = userNotExists;
    const token = jwt.sign({ id, displayName, image }, process.env.JWT_SECRET, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});
