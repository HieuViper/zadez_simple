"use strict";
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "Customers",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      districtId: DataTypes.INTEGER,
      otp: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { tableName: "customers" }
  );
  Customers.associate = function (models) {
    //return
  };
  return Customers;
};
