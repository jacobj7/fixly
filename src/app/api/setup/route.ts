import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ status: "ok", app: "fixly", version: "0.1.0" });
}

export async function POST(): Promise<NextResponse> {
  return NextResponse.json(
    { status: "ok", app: "fixly", initialized: true },
    { status: 200 }
  );
}
