const { BlogPost, Users, Categories } = require('../../models');

const getAllBP = async () => {
    const userList = await BlogPost.findAll(
      {
      include: [
        {
          model: Users,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Categories,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    },
  );
  return userList;
};

module.exports = async (req, res) => {
  try {
    const getPosts = await getAllBP();
    return res.status(200).json(getPosts);
  } catch (error) {
    res.status(401).json(error);
  }
};
