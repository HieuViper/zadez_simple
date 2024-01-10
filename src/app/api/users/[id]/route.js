import db from "@/models";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let rows = await db.Users.findOne({
    where: { id: params.id },
    include: [
      {
        model: db.Roles,
        as: "roles",
      },
    ],
  });

  return NextResponse.json(rows);
}

export async function PUT(body, req) {
  const id = req.params.id;
  const userData = await body.json();
  // const hashedPassword = await bcrypt.hash(userData.password, 10);
  // userData.password = hashedPassword;
  const result = await db.Users.update(userData, { where: { id: id } });

  await fetch(`${process.env.BASE_URL}/api/userRoles`, {
    method: "POST",
    body: JSON.stringify({
      userId: id,
      roleId: userData.rolesId,
    }),
  });

  return NextResponse.json(result);
}

export async function DELETE(body, req) {
  const id = req.params.id;
  const result = await db.Users.destroy({ where: { id: id } });
  await db.UserRoles.destroy({ where: { userId: id } });
  return NextResponse.json(result);
}
