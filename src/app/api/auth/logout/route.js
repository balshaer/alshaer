import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/auth";

export async function POST() {
  try {
    // Clear the auth cookie
    clearAuthCookie();

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { success: false, error: "Logout failed" },
      { status: 500 },
    );
  }
}
