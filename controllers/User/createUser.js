const jwt = require('jsonwebtoken');
const { Users } = require('../../models');
require('dotenv').config();

module.exports = (async (req, res, next) => {
  try {
    const jwtConfig = {
      expiresIn: '15d',
      algorithm: 'HS256',
    };
    const { displayName, email, password, image = '' } = req.body;
    const { dataValues: { id } } = await Users.create({ displayName, email, password, image });
    const token = jwt.sign({ id, displayName, email, image }, process.env.JWT_SECRET, jwtConfig);

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
});
