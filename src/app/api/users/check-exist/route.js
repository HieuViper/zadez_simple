import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const userByEmail = await db.Users.findOne({
    where: {
      email: searchParams.get("email"),
    },
  });
  const userByPhone = await db.Users.findOne({
    where: {
      phoneNumber: searchParams.get("phone"),
    },
  });
  if (userByEmail) {
    return NextResponse.json({
      status: 401,
      code: "email",
      message: "Email already exist",
    });
  }
  if (userByPhone) {
    return NextResponse.json({
      status: 401,
      code: "phone",
      message: "Phone already exist",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "User doesn't exist",
  });
}
