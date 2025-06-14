import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const client = await clientPromise;
    const db = client.db("blog");

    const result = await db.collection("posts").deleteOne({ _id: new ObjectId(id) });

    return Response.json({ success: true, deletedCount: result.deletedCount });
  } catch (error) {
    console.error(error);
    return new Response("Delete failed", { status: 500 });
  }
}
