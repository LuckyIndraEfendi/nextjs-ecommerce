import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
export async function GET(res: NextResponse, { params }: any) {
  const { id } = params;
  console.log(id);
  const barang = await prisma.barang.findFirst({
    where: {
      id_name: id,
    },
  });

  return NextResponse.json(barang);
}
