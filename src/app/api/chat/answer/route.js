import dbConnect from "@/utils/dbConnect";
import Answer from "@/models/Answer";
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
        const { answer } = body;
        const question_id = body.id;
        console.log("QUESTION", body)
        if (!answer || !question_id) {
            return Response.json({ error: "Answer invalid" }, { status: 400 });
        }
        console.log("User:", user);
        console.log("Answer:", answer);

        const addAnswer = await Answer.create({ answer, author: user._id, question: question_id });
        console.log("The answer:", addAnswer);

        const question = await Question.findById(question_id);
        if (!question) {
            return Response.json({ error: "Question does not exist" }, { status: 400 });
        }

        question.answer.push(addAnswer._id);
        await question.save();

        return Response.json({ message: "Answer posted successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error posting answer:", error);
        return Response.json({ error: "Error posting the answer" }, { status: 500 });
    }
}
