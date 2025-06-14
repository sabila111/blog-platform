import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req) {
  try {
    const { id, title, category, imgUrl, content, date } = await req.json();
    const client = await clientPromise;
    const db = client.db("blog");

    const result = await db.collection("posts").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          category,
          imgUrl,
          content,
          date,
        },
      }
    );

    return Response.json({ message: "Updated", result });
  } catch (error) {
    return new Response("Update Failed", { status: 500 });
  }
}
