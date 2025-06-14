import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

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

    const hashedPassword = await bcrypt.hash(password, 10);
    await users.insertOne({ name, email, password: hashedPassword });

    return Response.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
