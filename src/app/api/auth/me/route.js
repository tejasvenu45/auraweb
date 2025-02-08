import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/Users";

export async function GET() {
  try {
    await dbConnect();

    // ✅ Await the cookies() function before using it
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }
}
