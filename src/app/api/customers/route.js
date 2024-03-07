import db from "@/models";
import { NextResponse } from "next/server";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export async function GET(req, { params }) {
  // const signIn = await auth.checkAuth(req.headers.get("Authorization"), [
  //   "admin",
  // ]);
  // if (!signIn) {
  //   return NextResponse.json({ status: 401 });
  // }
  // console.log(req.headers.get("Authorization"));

  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.has("page") ? searchParams.get("page") - 1 : 0;
  const limit = searchParams.has("limit") ? searchParams.get("limit") : 10;
  const option = searchParams.has("keyword")
    ? {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            email: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
          {
            phone: {
              [Op.like]: "%" + searchParams.get("keyword") + "%",
            },
          },
        ],
      }
    : {};

  let { count, rows } = await db.Customers.findAndCountAll({
    where: option,
    offset: parseInt(page) * parseInt(limit),
    limit: parseInt(limit),
    order: [["id", "DESC"]],
    include: [
      {
        model: db.Cities,
        as: "cities",
      },
      {
        model: db.Districts,
        as: "districts",
      },
      {
        model: db.Wards,
        as: "wards",
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

function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

export async function POST(body, req) {
  const bodyJSON = await body.json();
  let customer = bodyJSON;

  // validate name customer
  let result = validateVietnameseName(customer.name);
  console.log(result);

  function validateVietnameseName(name) {
    var regex = /^[a-zA-Z\u00C0-\u1EF9\s]+$/;

    if (regex.test(name)) {
      return true;
    } else {
      return false;
    }
  }

  if (!result) {
    return NextResponse.json({
      result: "error",
    });
  } else {
    let customerResult = await db.Customers.create(customer);
    return NextResponse.json({
      result: "success",
      message: "customer created successfully",
    });
  }
}

export async function DELETE(body, req) {
  const bodyJSON = await body.json();
  await db.Customers.destroy({
    where: { id: { [Op.in]: bodyJSON.ids } },
  });
  return NextResponse.json({
    result: "success",
    message: "customers deleted successfully",
  });
}
