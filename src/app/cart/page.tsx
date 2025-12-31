"use client";

import { useState, useEffect } from "react";
import {Image} from "next/image";

type CartItem = {
  id: number;
  product: {
    name: string;
    price: number;
    imageUrl?: string;
  };
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart");
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      setCart(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id: number) => {
    await fetch(`/api/cart/${id}`, { method: "DELETE" });
    fetchCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-black to-purple-700">
        <p className="text-white text-lg">Loading cart...</p>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-purple-700 flex justify-center py-16 px-6">
      {/* Centered container */}
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-purple-300 mb-12">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-purple-200 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl text-white"
              >
                <div className="flex items-center gap-4">
                  {item.product.imageUrl && (
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-lg">{item.product.name}</p>
                    <p className="text-purple-200">
                      ₱{item.product.price.toLocaleString()} × {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500/80 hover:bg-red-600 px-4 py-2 rounded-full text-white font-medium transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white">
              <p className="text-xl font-semibold">Total: ₱{total.toLocaleString()}</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
