import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req, { params }) {
    const { username } = params;
    await connectToDatabase();
    const user = await User.findOne({ name: username });

    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}