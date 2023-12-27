"use strict";
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      code: DataTypes.STRING,
      input_date: DataTypes.DATE,
      output_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    { tableName: "orders" }
  );
  Orders.associate = function (models) {
    Orders.belongsTo(models.Customers, {
      as: "customers",
      foreignKey: "customerId",
    });
    Orders.hasMany(models.OrderDetails, {
      as: "order_detail",
      foreignKey: "orderId",
    });
  };
  return Orders;
};
