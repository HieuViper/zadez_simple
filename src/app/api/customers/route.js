import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.has("page") ? searchParams.get("page") - 1 : 0;
  const limit = searchParams.has("limit") ? searchParams.get("limit") : 10;
  const option = searchParams.has("keyword")
    ? {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            email: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            phone: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
        ],
      }
    : {};

  let { count, rows } = await db.Customers.findAndCountAll({
    where: option,
    offset: parseInt(page) * parseInt(limit),
    limit: parseInt(limit),
    order: [["id", "DESC"]],
    include: [
      {
        model: db.Cities,
        as: "cities",
      },
      {
        model: db.Districts,
        as: "districts",
      },
      {
        model: db.Wards,
        as: "wards",
      },
    ],
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
  let customer = bodyJSON;

  let customerResult = await db.Customers.create(customer);
  console.log(
    "🚀 ~ file: route.js:55 ~ POST ~ customerResult:",
    customerResult
  );
  return NextResponse.json({
    result: "success",
    message: "customer created successfully",
  });
}
