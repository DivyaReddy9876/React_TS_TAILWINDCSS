import React from "react";
import { useCart } from "../hooks/useCart";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
              
              {/* ✅ Product Image (Smaller for better view) */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-16 h-16 object-contain rounded-md"
              />

              {/* ✅ Product Details */}
              <div className="flex-1 ml-4">
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>

              {/* ✅ Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="bg-gray-300 px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>

              {/* ✅ Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Total Price */}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${getTotalPrice().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
