import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany(); // clean existing data

  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        category: "Audio",
        price: 99.99,
        description: "High-quality sound with noise cancellation.",
        imageUrl: "/images/headphone.webp",
      },
      {
        name: "Mechanical Keyboard",
        category: "Accessories",
        price: 79.99,
        description: "RGB backlit keyboard with tactile switches.",
        imageUrl: "/images/keyboard.webp",
      },
      {
        name: "Gaming Mouse",
        category: "Accessories",
        price: 49.99,
        description: "Precision optical mouse with programmable buttons.",
        imageUrl: "/images/mouse.png",
      },
    ],
  });

  console.log("✅ Seeded products successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
