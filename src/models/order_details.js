"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define(
    "OrderDetails",
    {
      amount: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      note: DataTypes.TEXT,
    },
    { tableName: "order_details" }
  );
  OrderDetails.associate = function (models) {
    OrderDetails.belongsTo(models.Orders, {
      as: "orders",
      foreignKey: "orderId",
    });
    OrderDetails.belongsTo(models.Products, {
      as: "products",
      foreignKey: "productId",
    });
  };
  return OrderDetails;
};
