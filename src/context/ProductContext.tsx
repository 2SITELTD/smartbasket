import React, { createContext, useContext, useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  isSale: boolean;
  image: string;
  description?: string;
}

interface ProductContextType {
  products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from an API or local data
    const fetchProducts = async () => {
      // Replace with your API call
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 