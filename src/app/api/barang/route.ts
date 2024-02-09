import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const barang = await prisma.barang.create({
    data: body,
  });

  return NextResponse.json(barang);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const barang = await prisma.barang.findMany();

  return NextResponse.json(barang);
}
