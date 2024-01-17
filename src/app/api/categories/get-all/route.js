import { NextResponse } from "next/server";
const db = require("@/models");
const Sequelize = require("sequelize");
export async function GET() {
    try {
        let rows = await db.Categories.findAll({
            include: [
                {
                    model: db.Products,
                    as: 'products',
                },
            ],
        });
        // console.log('rows:', rows);

        return NextResponse.json({
            data: rows,
        });
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
        // throw new Error('error here: ' + error.message);
    }
}