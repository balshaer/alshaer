import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Content from "@/lib/models/content";

export async function GET(request, { params }) {
  try {
    await dbConnect();

    const content = await Content.findOne({ 
      section: params.section,
      isActive: true 
    });

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();

    const body = await request.json();
    body.section = params.section; // Ensure section matches URL parameter

    const content = await Content.findOneAndUpdate(
      { section: params.section },
      body,
      { new: true, runValidators: true, upsert: true }
    );

    return NextResponse.json({
      success: true,
      data: content,
      message: "Content updated successfully"
    });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    const content = await Content.findOneAndUpdate(
      { section: params.section },
      { isActive: false },
      { new: true }
    );

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Content deactivated successfully"
    });
  } catch (error) {
    console.error("Error deleting content:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
