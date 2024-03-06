import { sendMail } from "@/auth/mail";
import { templateInfoOrder } from "@/library/templateMail";
import db from "@/models";
import axios from "axios";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.has("page") ? searchParams.get("page") - 1 : 0;
  const limit = searchParams.has("limit") ? searchParams.get("limit") : 20;

  let option = searchParams.has("keyword")
    ? {
        code: {
          [Op.like]: "%" + searchParams.get("keyword") + "%",
        },
      }
    : {};
  (searchParams.has("status") && searchParams.get("status") == "all") ||
  !searchParams.get("status")
    ? (option = { ...option })
    : (option = {
        ...option,
        status: searchParams.get("status"),
      });

  console.log(option);
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

  const createdOrder = await axios.get(
    `${process.env.BASE_URL}/api/orders/${orderResult.id}`
  );
  console.log("🚀 ~ POST ~ createdOrder:", createdOrder.data);

  const options = {
    from: "ZADEZ <cskh@gmail.com>", // sender address
    to: createdOrder.data.customers.email, // receiver email
    subject: "Chi tiết đơn hàng",
    html: templateInfoOrder(createdOrder.data),
  };
  console.log("option", options);
  sendMail(options, (info) => {
    NextResponse.json({
      status: 200,
      result: "success",
      message: "requests created successfully",
    });
  });

  return NextResponse.json({
    result: "success",
    message: "order created successfully",
  });
}

export async function DELETE(body, req) {
  const bodyJSON = await body.json();
  await db.Orders.destroy({
    where: { id: { [Op.in]: bodyJSON.ids } },
  });
  await db.OrderDetails.destroy({
    where: { orderId: { [Op.in]: bodyJSON.ids } },
  });
  return NextResponse.json({
    result: "success",
    message: "customers deleted successfully",
  });
}
