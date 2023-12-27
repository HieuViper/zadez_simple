import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  let rows = await db.Customers.findOne({
    where: { id: params.id },
  });

  return NextResponse.json(rows);
}

export async function PUT(body, { params }) {
  const customer = await body.json();

  let updateOrder = await db.Customers.update(customer, {
    where: { id: params.id },
  });

  return NextResponse.json({
    result: "success",
    message: "order updated successfully",
  });
}

export async function DELETE(body, { params }) {
  let result = await db.Customers.destroy({ where: { id: params.id } });
  return NextResponse.json({
    result: "success",
    message: "deleted success",
  });
}
