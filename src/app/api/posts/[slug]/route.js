import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//get single post

export const GET = async (req, { params }) => {

    const { slug } = params;

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            // data: { views: { increment: 1 } },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};