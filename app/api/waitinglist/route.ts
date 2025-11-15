import { connect } from "@/dbConfig/dbConfig";
import WaitingUsers from "@/model/listModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const { name, email } = await request.json();

        if (!name || !email) {
            return NextResponse.json(
                { status: false, message: "Name and Email are required" },
                { status: 400 }
            );
        }

        const existingUser = await WaitingUsers.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                {
                    status: false,
                    message: "You have already joined the waiting list!",
                },
                { status: 409 }
            );
        }

        const newEntry = await WaitingUsers.create({ name, email });

        return NextResponse.json({
            status: true,
            message: "Successfully joined the waiting list!",
            newEntry,
        });
    } catch (error: any) {
        if (error.code === 11000) {
            return NextResponse.json(
                { status: false, message: "Email already exists!" },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { status: false, error: error.message || "Server error" },
            { status: 500 }
        );
    }
}
