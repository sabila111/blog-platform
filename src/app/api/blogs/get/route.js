import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("blog");
    const blogs = await db.collection("posts").find().toArray();

    return Response.json(blogs);
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch blogs", { status: 500 });
  }
}
