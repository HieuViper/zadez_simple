"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wards = sequelize.define(
    "Wards",
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      division_type: DataTypes.STRING,
      codename: DataTypes.STRING,
    },
    { tableName: "wards" }
  );
  Wards.associate = function (models) {
    Wards.belongsTo(models.Districts, {
      as: "districts",
      foreignKey: "districtId",
    });
    Wards.hasMany(models.Customers, {
      foreignKey: "wardId",
    });
  };
  return Wards;
};
