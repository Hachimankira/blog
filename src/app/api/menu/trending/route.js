import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


//get all trending post

export const GET = async () => {
    try {
        const posts = await prisma.post.findMany({
            include: { user: true },
            orderBy: {
                views: 'desc',
              },
              take: 3,
        });
        return new NextResponse(JSON.stringify(posts, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};
