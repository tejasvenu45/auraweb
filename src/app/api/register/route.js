import dbConnect from '@/utils/dbConnect';
import Event from '@/models/Event';

export async function POST(req) {
    await dbConnect();    
    try {
        const body = await req.json();
        const event = new Event(body);
        await event.save();
        return Response.json({ success: true, data: event }, { status: 201 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 400 });
    }
}

