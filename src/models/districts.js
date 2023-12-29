"use strict";
module.exports = (sequelize, DataTypes) => {
  const Districts = sequelize.define(
    "Districts",
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      division_type: DataTypes.STRING,
      codename: DataTypes.STRING,
    },
    { tableName: "districts" }
  );
  Districts.associate = function (models) {
    Districts.hasMany(models.Wards, {
      as: "wards",
      foreignKey: "districtId",
    });
    Districts.belongsTo(models.Cities, {
      as: "cities",
      foreignKey: "cityId",
    });
    Districts.hasMany(models.Customers, {
      foreignKey: "districtId",
    });
  };
  return Districts;
};
