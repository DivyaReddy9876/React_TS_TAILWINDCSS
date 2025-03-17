import React from "react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../hooks/useCart"; 


interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart, onUpdateQuantity, totalPrice }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div className="flex-1 px-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-16 border p-1"
                  onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
              <button className="text-red-500" onClick={() => onRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
