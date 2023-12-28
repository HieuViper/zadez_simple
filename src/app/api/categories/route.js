import { NextResponse } from "next/server";
// import db from '@/models';
const db = require("@/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
export async function GET(req, { params }) {
    try {
        const searchParams = req.nextUrl.searchParams;
        console.log('searchParams :', Array.from(searchParams.entries()).length);
        const page = searchParams.has("page") ? searchParams.get('page') - 1 : 0;
        const limit = searchParams.has("limit") ? searchParams.get('limit') : 10;

        // const option = searchParams.has("search") ? {
        //     Code: {
        //         [Op.like]: "%" + searchParams.get('search') + "%",
        //     },
        // } ? type : {
        //     [Op.like]: "%" + searchParams.get('type') + "%",
        // }: {};

        // let option = Array.from(searchParams.entries()).length > 0 ? {
        //     [Op.or]: [
        //         {
        //             name: {
        //                 [Op.like]: "%" + searchParams.get("search") + "%",
        //             },
        //         },
        //         {
        //             category_code: {
        //                 [Op.like]: "%" + searchParams.get("search") + "%",
        //             },
        //         },
        //         {
        //             description: {
        //                 [Op.like]: "%" + searchParams.get("search") + "%",
        //             },
        //         },
        //         {
        //             type: {
        //                 [Op.like]: "%" + searchParams.get('type') + "%",
        //             }
        //         },
        //         {
        //             order: {
        //                 [Op.like]: "%" + searchParams.get('order') + "%",
        //             },
        //         }

        //     ]
        // } : {}
        let option = {}
        if (searchParams.has("search")) {
            option = {
                ...option,
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: "%" + searchParams.get("search") + "%",
                        },
                    },
                    {
                        category_code: {
                            [Op.like]: "%" + searchParams.get("search") + "%",
                        },
                    },
                    {
                        description: {
                            [Op.like]: "%" + searchParams.get("search") + "%",
                        },
                    },
                ],
            };
        } else { { } }
        if (searchParams.has("type")) {
            option = {
                ...option,
                type: {
                    [Op.like]: "%" + searchParams.get('type') + "%",
                },
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
        let { count, rows } = await db.Categories.findAndCountAll({
            where: option,
            include: [
                {
                    model: db.Products,
                    as: 'products',
                },
            ],
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
    const del_categories_cate = await db.Categories.destroy({ where: { id: { [Op.in]: ids } } })
    return NextResponse.json({
        result: "success"
    })
}
export async function POST(body, req) {
    try {
        const Categories = await body.json();
        let result = await db.Categories.create(Categories);

        return NextResponse.json({
            result: "success",
            message: "categories created successfully",
            data: result
        });
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
        // throw new Error('error here: ' + error.message);
    }
}