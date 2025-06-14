import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("blog"); 
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }

    
    await users.insertOne({ name, email, password });

    return Response.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
