import { NextResponse } from "next/server";
import db from "@/models";

export async function POST(body, req) {
    try {
        const category = await body.json();
        let result = await db.Categories.create(category);
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
        let category = await db.Categories.findOne({
            where: { id: params.id },
            include: [
                {
                    model: db.Products,
                    as: 'products',
                },
            ],
        });

        return NextResponse.json(category);
    }
    catch (error) {
        return NextResponse.json({ msg: 'error here: ' + error.message }, { status: 500 });
        // throw new Error('error here: ' + error.message);
    }
}

export async function PUT(body, req) {
    try {
        const categoryId = req.params.id; // Assuming categoryId is passed in the request parameters
        const categoryData = await body.json();

        const existingCategory = await db.Categories.findByPk(categoryId);
        if (!existingCategory) {
            return NextResponse.json({ msg: 'Category not found' }, { status: 404 });
        }

        // Update the existing category with the new data
        await existingCategory.update(categoryData);

        return NextResponse.json({
            result: "success",
            message: "Category updated successfully",
            data: existingCategory
        });
    } catch (error) {
        return NextResponse.json({ msg: 'Error updating category: ' + error.message }, { status: 500 });
    }
}
