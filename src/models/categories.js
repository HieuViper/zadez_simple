("use strict");
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      name: {
        type: DataTypes.STRING(200),
        collate: "utf8mb4_unicode_520_ci",
        defaultValue: "undefined",
      },
      category_code: {
        type: DataTypes.STRING,
        unique: true,
        collate: "utf8mb4_unicode_520_ci",
        defaultValue: "",
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "feature image of the products",
      },
      parent: DataTypes.INTEGER,
      type: DataTypes.STRING,
      order: DataTypes.INTEGER,
      description: {
        type: DataTypes.TEXT("long"),
        collate: "utf8mb4_unicode_520_ci",
        allowNull: true,
        comment: "Description",
      },
    },
    {
      tableName: "categories",
    }
  );

  Categories.associate = function (db) {
    // associations can be defined here
    Categories.hasMany(db.Products, {
      as: 'products',
      foreignKey: 'categoryId',
    });
    // db.Products.belongsTo(Categories, {
    //   as: 'categories',
    //   foreignKey: "categoryId",
    // });
  };
  return Categories;
};
