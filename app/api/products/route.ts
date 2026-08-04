import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Product from "@/models/products";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
