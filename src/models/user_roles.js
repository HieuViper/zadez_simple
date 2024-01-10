"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define(
    "UserRoles",
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      roleId: {
        type: DataTypes.INTEGER,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { tableName: "user_roles" }
  );
  UserRoles.associate = function (models) {
    // associations can be defined here
    models.Users.belongsToMany(models.Roles, {
      foreignKey: "userId",
      through: UserRoles,
      as: "roles",
    });
    models.Roles.belongsToMany(models.Users, {
      foreignKey: "roleId",
      through: UserRoles,
    });
  };
  return UserRoles;
};
