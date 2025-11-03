import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-purple-300">TechnoBitz</span>
      </h1>
      <p className="text-purple-100 mb-8 text-lg">
        Discover top-tier gadgets and elevate your digital lifestyle.
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="/products"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md hover:shadow-lg"
        >
          Shop Now
        </Link>
        <Link
          href="/login"
          className="border border-purple-400 hover:bg-purple-600/40 text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
