const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const token = jwt.verify(authorization, process.env.JWT_SECRET);
      req.user = token;
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  } catch (error) {
    res.status(401).send();
  }
};