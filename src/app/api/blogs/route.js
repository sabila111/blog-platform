import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, category, imgUrl, content, date } = body;

    const client = await clientPromise;
    const db = client.db("blog"); // use your DB name
    const result = await db.collection("posts").insertOne({
      title,
      category,
      imgUrl,
      content,
      date: new Date(date),
    });

    return Response.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(JSON.stringify({ error: "Failed to create blog post" }), {
      status: 500,
    });
  }
}
