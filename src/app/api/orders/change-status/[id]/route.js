import db from "@/models";
import { NextResponse } from "next/server";

export async function PUT(body, { params }) {
  const bodyJSON = await body.json();

  await db.Orders.update(
    {
      status: bodyJSON.status,
    },
    {
      where: {
        id: params.id,
      },
    }
  );

  return NextResponse.json({
    result: "success",
    message: "order updated successfully",
  });
}
