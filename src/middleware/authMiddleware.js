import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/Users";
import dbConnect from "@/utils/dbConnect";

export async function authenticateUser(req) {
    try {
        await dbConnect();

        const cookieStore = await cookies();
        const token = await cookieStore.get("authToken")?.value;

        if (!token) {
            return null; 
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded?.userId) {
            return null; 
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return null; 
        }

        return user; 
    } catch (error) {
        console.error("Authentication error:", error);
        return null;
    }
}
