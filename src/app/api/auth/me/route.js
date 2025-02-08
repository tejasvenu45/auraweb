import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/Users";

export async function GET() {
  try {
    await dbConnect();

    const token = cookies().get("authToken")?.value;
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
