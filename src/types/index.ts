export interface Product {
    id: number;
    name: string;  // ✅ Ensure this exists
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }