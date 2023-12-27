import { updateOrCreate } from "@/library/utils";
import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  let rows = await db.Orders.findOne({
    where: { id: params.id },
    include: [
      {
        model: db.Customers,
        as: "customers",
      },

      {
        model: db.OrderDetails,
        as: "order_detail",
        include: [
          {
            model: db.Products,
            as: "products",
            attributes: [
              "product_code",
              "id",
              "main_image",
              "price",
              "discount_price",
            ],
            include: [
              {
                model: db.Product_languages,
                as: "product_languages",
              },
            ],
          },
        ],
      },
    ],
  });

  return NextResponse.json(rows);
}

export async function PUT(body, { params }) {
  const bodyJSON = await body.json();
  let { products, ...order } = bodyJSON;

  let updateOrder = await db.Orders.update(order, {
    where: { id: params.id },
  });
  console.log("🚀 ~ file: route.js:27 ~ PUT ~ updateOrder:", updateOrder);

  products.map(async (item) => {
    let order_detail = {
      orderId: params.id,
      productId: item.productId,
      amount: item.amount,
      price: item.price,
    };

    let rs = await updateOrCreate(
      db.OrderDetails,
      {
        orderId: params.id,
        productId: item.productId,
      },
      order_detail
    );
    console.log("🚀 ~ file: route.js:41 ~ products.map ~ rs:", rs);
  });
  return NextResponse.json({
    result: "success",
    message: "order updated successfully",
  });
}

export async function DELETE(body, { params }) {
  let result = await db.Orders.destroy({ where: { id: params.id } });
  let rs = await db.OrderDetails.destroy({ where: { orderId: params.id } });
  return NextResponse.json({
    result: "success",
    message: "deleted success",
  });
}
