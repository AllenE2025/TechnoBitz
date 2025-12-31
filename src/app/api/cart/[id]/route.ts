import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function DELETE(req: Request, { params }: { params: { id: string }}) {
  const id = parseInt(params.id);

  // Delete the cart item by its unique CartItem id
  await prisma.cartItem.delete({ where: { id } });

  return NextResponse.json({ message: "Item removed" });
}
