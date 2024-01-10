import db from "@/models";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

export async function GET(req, { params }) {
  // const signIn = await auth.checkAuth(req.headers.get("Authorization"), [
  //   "admin",
  // ]);
  // if (!signIn) {
  //   return NextResponse.json({ status: 401 });
  // }

  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.has("page") ? searchParams.get("page") - 1 : 0;
  const limit = searchParams.has("limit") ? searchParams.get("limit") : 10;
  const option = searchParams.has("keyword")
    ? {
        [Op.or]: [
          {
            code: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            name: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
        ],
      }
    : {};

  let { count, rows } = await db.Roles.findAndCountAll({
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
  const role = await body.json();
  const result = await db.Roles.create(role);
  return NextResponse.json(result);
}
