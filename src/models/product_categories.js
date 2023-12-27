("use strict");
module.exports = (sequelize, DataTypes) => {
  const Product_categories = sequelize.define(
    "Product_categories",
    {
      parent: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allownNull: true,
      },
      category_code: {
        type: DataTypes.STRING,
        unique: true,
        collate: "utf8mb4_unicode_520_ci",
        defaultValue: "",
      },
      type: {
        type: DataTypes.STRING,
        collate: "utf8mb4_unicode_520_ci",
        defaultValue: "",
      },
    },
    {
      tableName: "product_categories",
    }
  );

  Product_categories.associate = function (db) {
    // associations can be defined here
  };
  return Product_categories;
};
