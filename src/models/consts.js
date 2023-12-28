"use strict";
module.exports = (sequelize, DataTypes) => {
  const Consts = sequelize.define(
    "Consts",
    {
      mainImageURL: DataTypes.STRING,
      value: DataTypes.STRING,
      order: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      title: DataTypes.STRING,
      short: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    { tableName: "consts" }
  );
  Consts.associate = function (models) {};
  return Consts;
};
