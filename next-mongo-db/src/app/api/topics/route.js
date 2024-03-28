import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../Models/topic";
import { NextResponse } from 'next/server'


export async function POST(request){
    const {title,description} =await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message:"Topic created successfully"},{status:201});
} 

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Missing topic ID in request" }, { status: 400 });
        }

        await connectMongoDB();
        const deletedTopic = await Topic.findByIdAndDelete(id);

        if (!deletedTopic) {
            return NextResponse.json({ message: "Topic not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Topic deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}