import { prisma } from "@/prisma/prisma.client";
import { NextResponse } from "next/server";

export async function GET() {
  const components = await prisma.components.findMany({
    orderBy: {
      name: 'asc'
    }
  });

  return NextResponse.json(components)
}