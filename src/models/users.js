"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      fullName: DataTypes.STRING,
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastLogin: DataTypes.DATE,

      changedPassword: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Pending", "Deleted", "Active", "Deactivated"],
        defaultValue: null,
        allowNull: true,
      },
      verifyCode: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    { tableName: "users" }
  );
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
