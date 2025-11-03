// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">TechnoBitz</h1>
      <ul className="flex items-center space-x-6">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/cart" className="hover:text-blue-600">Cart</a></li>
        <li><a href="/products" className="hover:text-blue-600">Products</a></li>
         <li><a href="/login" className="hover:text-blue-600">Log In</a></li>
          <li><a href="/signup" className="hover:text-blue-600">Sign Up</a></li>
      </ul>
    </nav>
  );
}
