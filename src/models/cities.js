"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define(
    "Cities",
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      division_type: DataTypes.STRING,
      codename: DataTypes.STRING,
    },
    { tableName: "cities" }
  );
  Cities.associate = function (models) {
    Cities.hasMany(models.Districts, {
      as: "districts",
      foreignKey: "cityId",
    });
    Cities.hasMany(models.Customers, {
      foreignKey: "cityId",
    });
  };
  return Cities;
};
