import db from "@/models";
import { NextResponse } from "next/server";

export async function POST(body, req) {
  const userRole = await body.json();
  await db.UserRoles.destroy({
    where: {
      userId: userRole.userId,
    },
  });
  const arrData = userRole.roleId.map((item) => ({
    userId: userRole.userId,
    roleId: item,
  }));
  const result = await db.UserRoles.bulkCreate(arrData);

  return NextResponse.json(result);
}
