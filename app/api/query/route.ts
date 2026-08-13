import { connectDB } from "@/lib/mongodb";
import Query from "@/models/query";
import { ratelimit } from "@/lib/ratelimit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get client's IP address
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit BEFORE connecting to MongoDB
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
        },
      );
    }

    await connectDB();

    const body = await req.json();

    const query = await Query.create({
      website: "thapak-research",
      full_name: body.full_name,
      org: body.org,
      email: body.email,
      phone: body.phone_num,
      query_type: body.query_type,
      msg: body.msg,
    });

    return NextResponse.json(query, {
      status: 201,
    });
  } catch (error) {
    console.error("Query creation error:", error);

    return NextResponse.json(
      { error: "Failed to create query" },
      { status: 500 },
    );
  }
}
