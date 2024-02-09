import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import MidtransClient from "midtrans-client";
import cuid from "cuid";
let snap = new MidtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SECRETKEY,
  clientKey: process.env.MIDTRANS_CLIENTKEY,
});
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  //   const barang = await prisma.barang.create({
  //     data: body,
  //   });
  let paramameter = {
    item_details: {
      name: body.name,
      price: body.price,
      quantity: body.quantity,
    },
    transaction_details: {
      order_id: `order_id-${cuid()}`,
      gross_amount: body.price * body.quantity,
    },
    credit_card: {
      secure: true,
    },
  };
  const token = await snap.createTransactionToken(paramameter);
  return NextResponse.json({ token });
}
