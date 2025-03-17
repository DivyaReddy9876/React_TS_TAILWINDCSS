import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../hooks/useCart"; // ✅ Import Cart Hook

// ✅ Define Product Type
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { addToCart } = useCart(); // ✅ Get addToCart function

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {products.map((product: Product) => (
        <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          
          {/* ✅ Image with Fixed Size */}
          {/* ✅ Fixed Image Size */}
            <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
            </div>

          {/* ✅ Product Details */}
          <h3 className="text-sm font-semibold mt-2 text-center">{product.title}</h3>
          <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>

          {/* ✅ Add to Cart Button (Now Works) */}
          <button
            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition"
            onClick={() => addToCart({ ...product, quantity: 1 })} // ✅ Fixed: Now passing `quantity: 1`
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
