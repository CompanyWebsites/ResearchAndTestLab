import { connectDB } from "@/lib/mongodb";
import Query from "@/models/query";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    console.log(body);

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
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
