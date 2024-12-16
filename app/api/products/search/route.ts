import { prisma } from "@/prisma/prisma.client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Получаем параметр query из URL localhost:3000/api/products/search?query=sram
  const query = req.nextUrl.searchParams.get('query') || '';

  // И на основе полученного из query значения делаем поиск по продуктам из базы данных
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive' // Откл регистр чтоб не важно было с маленькой большой буквы
      },
    },
    take: 5, // Говорим только 5 продуктов вернуть с БД
  })
  
  return NextResponse.json(products)
}