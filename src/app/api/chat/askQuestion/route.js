import dbConnect from "@/utils/dbConnect";
import Question from "@/models/Chat";
import { authenticateUser } from "@/middleware/authMiddleware";

export async function POST(req) {
    try {
        await dbConnect();

        const user = await authenticateUser(req);
        if (!user) {
            return Response.json({ error: "User not authenticated" }, { status: 401 });
        }

        const body = await req.json();
        const { question } = body;


        if (!question) {
            return Response.json({ error: "Question not received" }, { status: 400 });
        }

        const putQuestion = await Question.create({ question, author: user._id });
        const getQuestion = await Question.findById(putQuestion._id);

        return Response.json({ message: "Question posted successfully", question: getQuestion }, { status: 201 });
    } catch (error) {
        console.error("Error posting question:", error);
        return Response.json({ error: "Error posting the question" }, { status: 500 });
    }
}
