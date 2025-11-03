# TechnoBitz E-commerce Website

A simple e-commerce website built with **Next.js**, **TypeScript**, **TailwindCSS**, and **PostgreSQL** using **Prisma** as the ORM.

## Features

- Browse products with images, descriptions, and prices
- Add items to cart
- Remove items from cart
- Responsive design using TailwindCSS
- Products and cart data stored in PostgreSQL via Prisma

## Technologies Used

- **Frontend:** Next.js, TypeScript, TailwindCSS
- **Backend / Database:** Prisma ORM, PostgreSQL
- **State Management:** useState, SWR for fetching cart data

## Project Structure

/public # Static assets (images, icons)
/prisma # Prisma schema and seed scripts
/src
/app # Next.js pages and API routes
/components # Reusable components like ProductCard
/lib # Prisma client


## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL
- pnpm, npm, or yarn

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/technobitz.git
cd technobitz

2. Install Dependencies:

npm install
# or
yarn

3. Setup environment variables:

DATABASE_URL="postgresql://postgres:<YOUR_PASSWORD>@localhost:5432/technobitz_db?schema=public"

4. Setup the database:

npx prisma migrate dev --name init
npx prisma generate
npx ts-node prisma/seed.ts

5. Run the development server:

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.

Usage

1. Navigate to /products to view available products.

2. Click Add to Cart to add items.

3. Go to /cart to see your cart contents and remove items.

Contributing

1. Fork the repository.

2. Create a new branch: git checkout -b feature/your-feature

3. Make your changes.

4. Commit your changes: git commit -m "Add your message"

5. Push to the branch: git push origin feature/your-feature

6. Open a Pull Request.

![Home Page](<technobitz (2).png>) ![Cart](<technobitz (3).png>) ![Products](<technobitz (1).png>)