import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const featured = await prisma.post.findMany({
        where: { 
            featured: true,
         },
         include: { user: true },
    });

    return new NextResponse(JSON.stringify(featured, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: `Error: ${error.message}` }), {status: 500});
}
};