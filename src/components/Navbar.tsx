import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";  // ✅ Import useCart Hook

const Navbar: React.FC = () => {
  const { cartItems } = useCart();  // ✅ Get cart items

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Shopping App
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">
            Products
          </Link>
          <Link to="/cart" className="hover:underline flex items-center">
            Cart 
            {cartItems.length > 0 && (
              <span className="ml-2 bg-white text-blue-600 rounded-full px-2 py-1 text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
