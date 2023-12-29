import db from "@/models";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const searchParams = req.nextUrl.searchParams;
  if (searchParams.get("cityId")) {
    let wards = [];
    let districts = [];
    let cities = [];

    cities = await db.Cities.findAll();

    districts = await db.Districts.findAll({
      where: { cityId: searchParams.get("cityId") },
    });

    if (searchParams.get("districtId")) {
      // wards = await db.Cities.findAll({
      //   where: { id: searchParams.get("cityId") },
      //   include: [
      //     {
      //       model: db.Districts,
      //       as: "districts",
      //       where: { cityId: searchParams.get("cityId") },
      //       include: searchParams.get("districtId")
      //         ? [
      //             {
      //               model: db.Wards,
      //               as: "wards",
      //               where: { districtId: searchParams.get("districtId") },
      //             },
      //           ]
      //         : [],
      //     },
      //   ],
      // });

      wards = await db.Wards.findAll({
        where: {
          districtId: searchParams.get("districtId"),
        },
      });
    }
    return NextResponse.json({
      cities,
      districts,
      wards,
    });
  } else {
    let cities = await db.Cities.findAll();
    return NextResponse.json({
      cities,
    });
  }
}
