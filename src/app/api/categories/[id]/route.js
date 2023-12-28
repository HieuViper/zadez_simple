import { NextResponse } from "next/server";
import db from "@/models";

export async function POST(body, req) {
    try {
        const product = await body.json();
        let result = await db.Categories.create(product);
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

export async function DELETE(body, req) {
    const id = req.params.id;
    db.Categories.destroy({ where: { id: id } })
    return NextResponse.json({
        result: "success",
        message: "deleted success",
    });
}
export async function GET(req, { params }) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const opLang = searchParams.has("lang") ? {
            code: searchParams.get("lang")

        } : {};
        let product = await db.Categories.findOne({
            where: { id: params.id },
            include: [
                {
                    model: db.Products,
                    as: 'products',
                },
            ],
        });

        return NextResponse.json({
            data: product
        });
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
        // throw new Error('error here: ' + error.message);
    }
}

export async function PUT(body, req) {
    try {
        const productId = req.params.id; // Assuming productId is passed in the request parameters
        const productData = await body.json();

        const existingProduct = await db.Categories.findByPk(productId);
        if (!existingProduct) {
            return NextResponse.json({ msg: 'Product not found' }, { status: 404 });
        }

        // Update the existing product with the new data
        await existingProduct.update(productData);

        return NextResponse.json({
            result: "success",
            message: "Product updated successfully",
            data: existingProduct
        });
    } catch (error) {
        return NextResponse.json({ msg: 'Error updating product: ' + error.message }, { status: 500 });
    }
}
// export async function PUT(body, req) {
//     try {
//         const product = await body.json();
//         let result = await db.Categories.create(product);

//         const Cate_langs = product.Cate_langs.map(item => ({
//             productId: result.id,
//             name: item.name,
//             short: item.short,
//             description: item.description,
//             languageCode: item.languageCode,
//         }));

//         const createdLanguages = await db.Cate_langs.bulkCreate(Cate_langs);

//         return NextResponse.json({
//             result: "success",
//             message: "Categories created successfully",
//             data: {
//                 product: result,
//                 Cate_langs: createdLanguages
//             }
//         });
//     } catch (error) {
//         return NextResponse.json({ msg: 'Error here: ' + error.message }, { status: 500 });
//     }
// }