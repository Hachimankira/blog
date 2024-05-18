import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1), //logic for pagination in server side rendering
    where:{
      ...(cat && {catSlug: cat}),
    },
  }

  try {
    const [posts, count] = await prisma.$transaction([ //can combine multiple queries in a single transaction
      prisma.post.findMany(query),
      prisma.post.count({where: query.where}),
    ]);

    return new NextResponse(JSON.stringify({posts , count}, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: `Error: ${error.message}` }), { status: 500 });
  }
};

// post a new post
export const POST = async (req) => {

  const session = await getAuthSession();

  if(!session){
      return new NextResponse(
          JSON.stringify({ message: "Not Authenticated!" }, { status: 500 })
      );
  }

  try {
      const body = await req.json();
      const post = await prisma.post.create({
          data:{...body, userEmail: session.user.email},
      });
      return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
      console.log(error);
      return new NextResponse(
          JSON.stringify({ message: {error} }, { status: 500 })
      );
  }
};