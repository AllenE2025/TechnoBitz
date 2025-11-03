import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TechnoBitz",
  description: "Your next-gen e-commerce tech store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-black to-purple-700 text-white flex flex-col">
        {/* Navbar */}
        <header className="bg-white/10 backdrop-blur-md border-b border-white/10 py-4 px-8 flex justify-between items-center shadow-md">
          <Link href="/" className="text-2xl font-bold text-purple-300 hover:text-white transition">
            TechnoBitz
          </Link>

          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-purple-200 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-purple-200 transition">
              Products
            </Link>
            <Link href="/cart" className="hover:text-purple-200 transition">
              Cart
            </Link>
            <Link href="/login" className="hover:text-purple-200 transition">
              Login
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-start py-10 px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white/10 backdrop-blur-md border-t border-white/10 py-4 text-center text-sm text-purple-200">
          © {new Date().getFullYear()} TechnoBitz — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
