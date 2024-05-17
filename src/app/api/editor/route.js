import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


//get all comments

export const GET = async () => {
    try {
        const posts = await prisma.post.findMany({
            where: { 
                editorChoice: true,
             },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(posts, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};