import db from "@/models";
import bcrypt from "bcrypt";
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
  const role = searchParams.has("role") ? searchParams.get("role") : "";
  const option = searchParams.has("keyword")
    ? {
        [Op.or]: [
          {
            email: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            fullName: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            phoneNumber: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
        ],
      }
    : {};

  let { count, rows } = await db.Users.findAndCountAll({
    where: option,
    offset: parseInt(page) * parseInt(limit),
    limit: parseInt(limit),
    order: [["id", "DESC"]],
    include: [
      {
        model: db.Roles,
        as: "roles",
        where: role
          ? {
              code: role,
            }
          : {},
      },
    ],
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
  let user = await body.json();

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  const resultUser = await db.Users.create(user);

  await fetch(`${process.env.BASE_URL}/api/userRoles`, {
    method: "POST",
    body: JSON.stringify({
      userId: resultUser.id,
      roleId: user.rolesId,
    }),
  });

  return NextResponse.json(resultUser);
}
