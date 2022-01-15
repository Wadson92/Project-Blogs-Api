// const jwt = require('jsonwebtoken');

// const API_SECRET = 'mySecret';

// module.exports = (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
//     if (!authorization) {
//       return res.status(401).json({ message: 'missing auth token' });
//     }
//     const { data } = jwt.verify(authorization, API_SECRET);
//     if (!data) {
//       return res.status(401).json(validUserId);
//     }
//     req.user = data;
//     next();
//   } catch (error) {
//     res.status(401).send(validUserId);
//   }
// };