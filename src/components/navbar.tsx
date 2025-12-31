// src/components/Navbar.tsx

import { Link } from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">TechnoBitz</h1>
      <ul className="flex items-center space-x-6">
        <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link href="/cart" className="hover:text-blue-600">Cart</Link></li>
        <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
         <li><Link href="/login" className="hover:text-blue-600">Log In</Link></li>
          <li><Link href="/signup" className="hover:text-blue-600">Sign Up</Link></li>
      </ul>
    </nav>
  );
}
