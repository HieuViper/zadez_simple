import auth from "@/auth/auth";
import db from "@/models";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  let rows = await db.Articles.findOne({
    where: { id: params.id },
  });

  return NextResponse.json(rows);
}

export async function PUT(body, { params }) {
  const headersList = headers();
  const token = headersList.get("authorization").split(" ")[1];
  const signIn = await auth.checkAuth(token, ["admin"]);
  if (!signIn) {
    return NextResponse.json({ status: 401 });
  }

  const articles = await body.json();

  let updateConst = await db.Articles.update(articles, {
    where: { id: params.id },
  });

  return NextResponse.json({
    result: "success",
    message: "order updated successfully",
  });
}

export async function DELETE(body, { params }) {
  let result = await db.Articles.destroy({ where: { id: params.id } });
  return NextResponse.json({
    result: "success",
    message: "deleted success",
  });
}
