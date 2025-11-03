import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - fetch all cart items
export async function GET() {
  const items = await prisma.cartItem.findMany({
    include: { product: true },
  });
  return NextResponse.json(items);
}

// POST - add product to cart
export async function POST(req: Request) {
  const { productId, quantity } = await req.json();

  const existing = await prisma.cartItem.findFirst({
    where: { productId },
  });

  let item;
  if (existing) {
    item = await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + quantity },
    });
  } else {
    item = await prisma.cartItem.create({
      data: { productId, quantity },
    });
  }

  return NextResponse.json(item);
}

// DELETE - remove item
export async function DELETE(req: Request) {
  const { productId } = await req.json();

  await prisma.cartItem.deleteMany({
    where: { productId },
  });

  return NextResponse.json({ success: true });
}
