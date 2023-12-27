import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.has("page") ? searchParams.get("page") - 1 : 0;
  const limit = searchParams.has("limit") ? searchParams.get("limit") : 20;
  const option = searchParams.has("keyword")
    ? {
        code: {
          [Op.like]: "%" + searchParams.get("keyword") + "%",
        },
      }
    : {};

  let { count, rows } = await db.Orders.findAndCountAll({
    where: option,
    offset: parseInt(page) * parseInt(limit),
    include: [
      {
        model: db.Customers,
        as: "customers",
      },
    ],
    limit: parseInt(limit),
    order: [["id", "DESC"]],
  });

  return NextResponse.json({
    data: rows,
    pagging: {
      lastPage: parseInt(count / parseInt(limit)),
      currentPage: page + 1,
      limit: parseInt(limit),
      total: count,
    },
  });
}

export async function POST(body, req) {
  const bodyJSON = await body.json();
  let { products, ...order } = bodyJSON;

  let orderResult = await db.Orders.create(order);
  console.log("🚀 ~ file: route.js:47 ~ POST ~ orderResult:", orderResult);

  products.map(async function (item) {
    let order_detail = {
      orderId: orderResult.id,
      productId: item.productId,
      amount: item.amount,
      price: item.price,
    };
    const rs = await db.OrderDetails.create(order_detail);
  });

  return NextResponse.json({
    result: "success",
    message: "order created successfully",
  });
}
