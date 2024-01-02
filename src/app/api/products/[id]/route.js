import { NextResponse } from "next/server";
import db from "@/models";

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

export async function DELETE(body, req) {
    const id = req.params.id;
    db.Products.destroy({ where: { id: id } })
    return NextResponse.json({
        result: "success",
        message: "deleted success",
    });
}
export async function GET(req, { params }) {
    try {
        let product = await db.Products.findOne({
            where: { id: params.id },
        });
        return NextResponse.json(product);
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
    }
}

export async function PUT(body, req) {
    try {
        const productId = req.params.id; // Assuming productId is passed in the request parameters
        const productData = await body.json();

        const existingProduct = await db.Products.findByPk(productId);
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
//         let result = await db.Products.create(product);

//         const product_languages = product.product_languages.map(item => ({
//             productId: result.id,
//             name: item.name,
//             short: item.short,
//             description: item.description,
//             languageCode: item.languageCode,
//         }));

//         const createdLanguages = await db.Product_languages.bulkCreate(product_languages);

//         return NextResponse.json({
//             result: "success",
//             message: "Products created successfully",
//             data: {
//                 product: result,
//                 product_languages: createdLanguages
//             }
//         });
//     } catch (error) {
//         return NextResponse.json({ msg: 'Error here: ' + error.message }, { status: 500 });
//     }
// }