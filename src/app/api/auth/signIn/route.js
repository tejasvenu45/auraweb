import dbConnect from "@/utils/dbConnect";
import User from "@/models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Store token in HttpOnly cookie
    cookies().set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 604800, // 7 days
    });

    return Response.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Error logging in" }, { status: 500 });
  }
}
