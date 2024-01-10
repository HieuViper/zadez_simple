import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const userId = params.id;
  const searchParams = req.nextUrl.searchParams;
  const user = await db.Users.findByPk(userId);
  const realOtp = user.otp;
  const receiveOtp = searchParams.get("otp");

  if (realOtp !== receiveOtp) {
    return NextResponse.json({
      status: 400,
      message: "Wrong OTP",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Check OTP Success",
  });
}
