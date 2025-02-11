import dbConnect from '@/utils/dbConnect';
import Question from '@/models/Chat';
import Answer from '@/models/Answer';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect(); 
        const questions = await Question.find({}).populate("answer");
        return NextResponse.json({ success: true, data: questions }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
