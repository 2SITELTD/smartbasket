import React from 'react';
import ProductCard from '../../components/front/homepage/ProductCard';

const products = [
  { id: '1', name: 'דובדבן טרי', price: 13.90, originalPrice: 16.90, isSale: true, image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/cherry.png' },
  { id: '2', name: 'אבוקדו אורגני', price: 12.90, originalPrice: 16.90, isSale: true, image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/avocado.png' },
  { id: '3', name: 'קיווי זהב', price: 13.90, originalPrice: 16.90, isSale: true, image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/kiwi.png' },
  { id: '4', name: 'מארז ירקות עונתי', price: 2.90, originalPrice: null, isSale: false, image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/box.png' },
  { id: '5', name: 'בצל', price: 13.90, originalPrice: 16.90, isSale: true, image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/onion.png' },
  { id: '6', name: 'אבטיח ללא גרעינים', price: 2.90, originalPrice: null, isSale: false, image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/watermellon.png' },
];

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 
        className="text-3xl font-bold mb-6 text-[#05172C] text-center"
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
      >
        המוצרים שלנו
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            image={product.image}
            isSale={product.isSale}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;