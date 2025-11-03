"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (id: number) => {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id, quantity: 1 }),
    });
    alert("Added to cart!");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-black to-purple-700">
        <p className="text-white text-lg">Loading products...</p>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-purple-700 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-300 mb-12">
          🛍️ Our Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-purple-200 text-lg">
            No products available.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center text-white hover:scale-105 transition-transform"
              >
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300} // adjust as needed
                    height={160} // adjust as needed
                    className="rounded-lg mb-4 object-cover"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-purple-200 mb-4">
                  ₱{product.price.toLocaleString()}
                </p>
                {product.description && (
                  <p className="text-sm text-purple-100 mb-4 text-center">
                    {product.description}
                  </p>
                )}
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
