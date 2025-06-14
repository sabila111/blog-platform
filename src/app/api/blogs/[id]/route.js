import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("blog");

    const blog = await db.collection("posts").findOne({
      _id: new ObjectId(params.id),
    });

    if (!blog) {
      return new Response("Not Found", { status: 404 });
    }

    return Response.json(blog);
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
