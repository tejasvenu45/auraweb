import { cookies } from "next/headers";

export async function POST() {
  cookies().set("authToken", "", { expires: new Date(0), path: "/" });
  return Response.json({ message: "Logged out successfully" }, { status: 200 });
}
