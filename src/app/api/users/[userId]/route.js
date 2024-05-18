import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { userId } = params;

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { 
                Post: true,
                Comment: true
             },
        });

        if (!user) {
            return new NextResponse(
                JSON.stringify({ message: "User not found" }, { status: 404 })
            );
        }

        return new NextResponse(JSON.stringify(user, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};