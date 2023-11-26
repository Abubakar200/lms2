import { db } from "@/lib/db";
import { issTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const {userId} = auth()
        const {title} = await req.json()

        if(!userId || !issTeacher(userId)){
            return new NextResponse('Unauthoried', {status: 401})
        }
        const course = await db.course.create({
            data:{
                userId,
                title
            }
        })
        return NextResponse.json(course)
    } catch (error) {
        console.log("[COURSES]", error);
        return new NextResponse('Internal error', {status: 500})        
    }
}