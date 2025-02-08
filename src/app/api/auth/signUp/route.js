import dbConnect from "@/utils/dbConnect";
import User from "@/models/Users";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, password,srn } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to DB
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return Response.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Error registering user" }, { status: 500 });
  }
}
