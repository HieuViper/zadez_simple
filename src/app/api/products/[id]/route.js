import { NextResponse } from "next/server";
import models from '@/app/models';
import db from "@/models";

export async function POST(body, req) {
    try {
        const product = await body.json();
        let result = await db.Products.create(product);
        // const product_languages = product.product_languages;
        // product_languages.map(async function (item) {
        //     var product_language = {
        //         productId: result.id,
        //         name: item.name,
        //         short: item.short,
        //         description: item.description,
        //         languageCode: item.languageCode,
        //     };
        //     const rs = await db.Product_languages.create(product_language);

        // });
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
    // db.Product_languages.destroy({ where: { productId: id } })
    db.Products.destroy({ where: { id: id } })
    return NextResponse.json({
        result: "success",
        message: "deleted success",
    });
    //     db.Products.destroy({ where: { id: id } })
    //         .then((result) => {
    //             db.Product_languages.destroy({ where: { productId: id } }).then(
    //                 (result) => {
    //                     return NextResponse.json({
    //                         result: "success",
    //                         message: "deleted success",
    //                     });
    //                 }
    //             );
    //         })
    //         .catch((error) => {
    //             return NextResponse.json({
    //                 message: "Something went wrong",
    //                 error: error,
    //             });
    //         });
}
export async function GET(req, { params }) {
    try {
        const searchParams = req.nextUrl.searchParams;
        // const opLang = searchParams.has("lang") ? {
        //     code: searchParams.get("lang")

        // } : {};
        let product = await db.Products.findOne({
            where: { id: params.id },
            // include: [
            //     {
            //         model: db.Product_languages,
            //         as: 'product_languages',
            //         include: [
            //             {
            //                 model: db.Languages,
            //                 as: 'languages',
            //                 where: opLang
            //             },
            //         ],
            //     },
            // ],
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