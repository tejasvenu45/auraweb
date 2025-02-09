import dbConnect from '@/utils/dbConnect';
import Question from '@/models/Chat';
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect(); 

    try {
        console.log("QUESTIONS")
        const questions = await Question.find({}).populate("answer");
        console.log("QUESTIONS", questions)
        return NextResponse.json({ success: true, data: questions }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
