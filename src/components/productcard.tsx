"use client";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md hover:shadow-purple-500/30 transition transform hover:-translate-y-1 p-5 flex flex-col text-white">
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="rounded-lg w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-purple-200 text-sm mt-1 line-clamp-2">
        {product.description}
      </p>
      <p className="text-purple-300 font-bold mt-2">${product.price.toFixed(2)}</p>
      <button
        className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition duration-300 shadow-md hover:shadow-lg"
        onClick={() => alert(`${product.name} added to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
}
