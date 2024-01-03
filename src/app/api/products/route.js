// import myConstant from "@/store/constant";
import { NextResponse } from "next/server";
// import db from '@/models';
const db = require("@/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
export async function GET(req, { params }) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const page = searchParams.has("page") ? searchParams.get('page') - 1 : 0;
        const limit = searchParams.has("limit") ? searchParams.get('limit') : 10;
        // const option = searchParams.has("keyword") ? {
        //     [Op.or]: [
        //         {
        //             name: {
        //                 [Op.like]: "%" + searchParams.get("keyword") + "%",
        //             },
        //         },
        //         {
        //             product_code: {
        //                 [Op.like]: "%" + searchParams.get("keyword") + "%",
        //             },
        //         },
        //         {
        //             short: {
        //                 [Op.like]: "%" + searchParams.get("keyword") + "%",
        //             },
        //         },
        //         {
        //             description: {
        //                 [Op.like]: "%" + searchParams.get("keyword") + "%",
        //             },
        //         },
        //         {
        //             status: {
        //                 [Op.like]: "%" + searchParams.get("keyword") + "%",
        //             },
        //         },
        //     ],
        // } : {};
        console.log('type :', searchParams.get('type'));
        console.log('categoryId :', searchParams.get('categoryId'));

        let option = {}
        if (searchParams.has("keyword")) {
            option = {
                ...option,
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: "%" + searchParams.get("keyword") + "%",
                        },
                    },
                    {
                        product_code: {
                            [Op.like]: "%" + searchParams.get("keyword") + "%",
                        },
                    },
                    {
                        short: {
                            [Op.like]: "%" + searchParams.get("keyword") + "%",
                        },
                    },
                    {
                        description: {
                            [Op.like]: "%" + searchParams.get("keyword") + "%",
                        },
                    },
                    {
                        status: {
                            [Op.like]: "%" + searchParams.get("keyword") + "%",
                        },
                    },
                ],
            };
        } else { { } }
        if (searchParams.has("categoryId") && searchParams.get("type") === '') {
            option = {
                ...option,
                categoryId: searchParams.get('categoryId'),
            };
        } else { { } }
        if (searchParams.has("type") && searchParams.get("categoryId") === '') {
            option = {
                ...option,
                type: searchParams.get("type")
            };
        } else { { } }
        if (searchParams.has("order")) {
            option = {
                ...option,
                order: {
                    [Op.like]: "%" + searchParams.get('order') + "%",
                },
            };
        } else { { } }
        if (searchParams.has("status")) {
            option = {
                ...option,
                status: {
                    [Op.like]: "%" + searchParams.get('status') + "%",
                },
            };
        } else { { } }

        console.log('>>option', option);

        let { count, rows } = await db.Products.findAndCountAll({
            where: option,

            offset: parseInt(page) * parseInt(limit),
            limit: parseInt(limit),
            order: [["id", "DESC"]],
        });
        // console.log('rows:', rows);

        return NextResponse.json({
            //status:status,
            data: rows,
            pagging: {
                lastPage: parseInt(count / parseInt(limit)),
                currentPage: page + 1,
                limit: parseInt(limit),
                total: count
            }
        });
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
        // throw new Error('error here: ' + error.message);
    }
}

export async function DELETE(body, { params }) {
    const data = await body.json();
    const ids = data.ids.split(",")
    const del_products = await db.Products.destroy({ where: { id: { [Op.in]: ids } } })
    return NextResponse.json({
        result: "success"
    })
}
export async function POST(body, req) {
    try {
        const product = await body.json();
        let result = await db.Products.create(product);
        return NextResponse.json({
            result: "success",
            message: "products created successfully",
            data: result
        });
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
        // throw new Error('error here: ' + error.message);
    }
}