import auth from "@/auth/auth";
import db from "@/models";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.has("page") ? searchParams.get("page") - 1 : 0;
  const limit = searchParams.has("limit") ? searchParams.get("limit") : 10;
  // const option = searchParams.has("keyword")
  //   ? {
  //       [Op.or]: [
  //         {
  //           title: {
  //             [Op.like]: "%" + searchParams.get("keyword") + "%",
  //           },
  //         },
  //         {
  //           value: {
  //             [Op.like]: "%" + searchParams.get("keyword") + "%",
  //           },
  //         },
  //       ],
  //     }
  //   : {};
  let option = {};
  if (searchParams.has("keyword")) {
    option = {
      ...option,
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
    };
  } else {
    {
    }
  }
  searchParams.has("value")
    ? (option = {
        ...option,
        value: searchParams.get("value"),
      })
    : {};

  let { count, rows } = await db.Articles.findAndCountAll({
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
  const headersList = headers();
  const token = headersList.get("authorization").split(" ")[1];
  const signIn = await auth.checkAuth(token, ["admin"]);
  if (!signIn) {
    return NextResponse.json({ status: 401 });
  }

  const bodyJSON = await body.json();
  let articles = bodyJSON;

  let articlesResult = await db.Articles.create(articles);
  return NextResponse.json({
    result: "success",
    message: "articles created successfully",
  });
}

export async function DELETE(body, req) {
  const headersList = headers();
  const token = headersList.get("authorization").split(" ")[1];
  const signIn = await auth.checkAuth(token, ["admin"]);
  if (!signIn) {
    return NextResponse.json({ status: 401 });
  }
  const bodyJSON = await body.json();
  await db.Articles.destroy({
    where: { id: { [Op.in]: bodyJSON.ids } },
  });
  return NextResponse.json({
    result: "success",
    message: "articles deleted successfully",
  });
}
