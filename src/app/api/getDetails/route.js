import dbConnect from '@/utils/dbConnect';
import Event from '@/models/Event';
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect(); // Connect to MongoDB

    try {
        const events = await Event.find({}); // Fetch all events
        return NextResponse.json({ success: true, data: events }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
