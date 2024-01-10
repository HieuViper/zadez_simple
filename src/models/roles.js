'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define(
    'Roles',
    {
      code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {tableName:"roles"}
  );
  Roles.associate = function (models) {
    // associations can be defined here
  };
  return Roles;
};
