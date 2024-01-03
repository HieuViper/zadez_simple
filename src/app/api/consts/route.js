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
            title: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            value: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
        ],
      }
    : {};

  let { count, rows } = await db.Consts.findAndCountAll({
    where: option,
    offset: parseInt(page) * parseInt(limit),
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
  let consts = bodyJSON;

  let constsResult = await db.Consts.create(consts);
  console.log("🚀 ~ file: route.js:55 ~ POST ~ constsResult:", constsResult);
  return NextResponse.json({
    result: "success",
    message: "consts created successfully",
  });
}

export async function DELETE(body, req) {
  const bodyJSON = await body.json();
  await db.Consts.destroy({
    where: { id: { [Op.in]: bodyJSON.ids } },
  });
  return NextResponse.json({
    result: "success",
    message: "consts deleted successfully",
  });
}
