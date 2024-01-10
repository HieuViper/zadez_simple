import db from "@/models";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
export async function POST(body, { params }) {
  const data = await body.json();
  const secretKey = process.env.JWT_SECRET_KEY;
  const expiresIn = process.env.EXPIRE_IN;
  const item = await db.Users.findOne({
    where: {
      [Op.or]: [
        { phoneNumber: data?.email },
        { email: data?.email },
        { userName: data?.email },
      ],
    },
    include: [
      {
        model: db.Roles,
        as: "roles",
      },
    ],
  });
  if (item === null) {
    return NextResponse.json({
      status: 404,
      message: "Not found email or phone or username",
      result: null,
    });
  } else {
    const result = await bcrypt.compare(data.password, item.password);
    if (result) {
      const roles = item.roles.map((item) => item.code);
      const payload = {
        roles: roles,
        id: item.id,
        email: item.email,
        phoneNumber: item.phoneNumber,
        fullName: item.fullName,
      };
      const token = jwt.sign(payload, secretKey, { expiresIn });

      return NextResponse.json({
        status: 200,
        message: "success",
        token,
        email: item.email,
        fullName: item.fullName,
        phoneNumber: item.phoneNumber,
        userId: item.id,
        roles: item.roles,
      });
    } else {
      return NextResponse.json({
        status: 400,
        message: "Password wrong",
        result: null,
      });
    }
  }
}
