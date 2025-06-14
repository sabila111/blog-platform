import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("blog");
    const users = db.collection("users");

    const user = await users.findOne({ email });

    if (!user) {
      return new Response("Invalid email", { status: 400 });
    }

    // Simple plain-text password comparison (NOT for production)
    if (user.password !== password) {
      return new Response("Invalid password", { status: 400 });
    }

    return Response.json({
      message: "Login successful",
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
