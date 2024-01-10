import { sendMail } from "@/auth/mail";
import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const key = searchParams.has("key") ? searchParams.get("key") : "";

  if (key) {
    const account = await db.Users.findOne({
      where: {
        [Op.or]: [
          {
            email: key,
          },
          {
            phoneNumber: key,
          },
          {
            userName: key,
          },
        ],
      },
    });
    if (account) {
      // create otp
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const user = await db.Users.findByPk(account.id);
      await user.update({
        otp,
      });

      const options = {
        from: "ZADEZ <cskh@gmail.com>", // sender address
        to: account.email, // receiver email
        subject: "otp",
        html: `<div>mã otp của bạn là: <b>${otp}</b></div>`,
      };
      sendMail(options, (info) => {
        NextResponse.json({
          status: 200,
          result: "success",
          message: "requests created successfully",
        });
      });

      return NextResponse.json({
        status: 200,
        message: "found account",
        result: account,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Not found account",
      });
    }
  } else {
    return NextResponse.json({
      status: 404,
      message: "Not found account",
    });
  }
}
