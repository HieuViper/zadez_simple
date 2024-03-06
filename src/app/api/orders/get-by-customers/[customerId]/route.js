import db from "@/models";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let rows = await db.Orders.findAll({
    where: {
      customerId: params.customerId,
    },
    include: [
      {
        model: db.OrderDetails,
        as: "order_detail",
        include: [
          {
            model: db.Products,
            as: "products",
            attributes: [
              "product_code",
              "id",
              "main_image",
              "price",
              "discount_price",
              "name",
            ],
          },
        ],
      },
    ],
  });
  return NextResponse.json(rows);
}

// export async function PUT(body, { params }) {
//   const bodyJSON = await body.json();

//   await db.Orders.update(
//     {
//       status: bodyJSON.status,
//     },
//     {
//       where: {
//         id: params.id,
//       },
//     }
//   );

//   return NextResponse.json({
//     result: "success",
//     message: "order updated successfully",
//   });
// }
