import db from "@/models";
import { NextResponse } from "next/server";

export async function GET(body, req) {
  const id = req.params.id;
  const result = await db.Roles.findByPk(id);
  return NextResponse.json(result);
}
export async function PUT(body, req) {
  const id = req.params.id;
  const role = await body.json();
  const result = await db.Roles.update(role, { where: { id: id } });
  return NextResponse.json(result);
}
export async function DELETE(body, req) {
  const id = req.params.id;
  const result = await db.Roles.destroy({ where: { id: id } });
  return NextResponse.json({ message: "DELETE from Next.js!", result: result });
}
