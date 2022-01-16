const Category = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  },
  {
    timestamps: true,
  });

  return Categories;
};

module.exports = Category;
