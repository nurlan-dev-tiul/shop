import { prisma } from "@/prisma/prisma.client";
import { NextResponse } from "next/server";

export async function GET() {
  const componets = await prisma.components.findMany();

  return NextResponse.json(componets)
}