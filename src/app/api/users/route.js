import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const users = await prisma.user.findMany({
            include: { Post: true },
            take: 6,
        });

        // Sort users by the number of posts
        users.sort((a, b) => b.Post.length - a.Post.length);
        return new NextResponse(JSON.stringify(users, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
}