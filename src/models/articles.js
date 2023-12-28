"use strict";
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define(
    "Articles",
    {
      mainImageURL: DataTypes.STRING,
      value: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      title: DataTypes.STRING,
      short: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    { tableName: "articles" }
  );
  Articles.associate = function (models) {};
  return Articles;
};
