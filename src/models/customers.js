"use strict";
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "Customers",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      otp: DataTypes.STRING,
    },
    { tableName: "customers" }
  );
  Customers.associate = function (models) {
    Customers.belongsTo(models.Cities, {
      as: "cities",
      foreignKey: "cityId",
    });
    Customers.belongsTo(models.Districts, {
      as: "districts",
      foreignKey: "districtId",
    });
    Customers.belongsTo(models.Wards, {
      as: "wards",
      foreignKey: "wardId",
    });
  };
  return Customers;
};
