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
      description: DataTypes.TEXT,
      status: DataTypes.STRING,
      keywords: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("keywords").length == 0
            ? []
            : this.getDataValue("keywords").split(";");
        },
        set(val) {
          this.setDataValue("keywords", val.join(";"));
        },
      },
    },
    { tableName: "articles" }
  );
  Articles.associate = function (models) {};
  return Articles;
};
