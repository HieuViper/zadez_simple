import db from "@/models";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function POST(req, { params }) {
  const userId = params.id;
  const body = await req.json();
  const user = await db.Users.findByPk(userId);
  await user.update({
    password: await bcrypt.hash(body.password, 10),
    otp: null,
  });

  return NextResponse.json({
    status: 200,
    message: "Change Password Success",
  });
}
