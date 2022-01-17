module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, {
    timestamps: false,
  });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostsCategory;
};
