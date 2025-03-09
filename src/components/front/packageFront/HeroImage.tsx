import React from 'react';

interface ProductImageProps {
  imageUrl: string;
}

export const HeroImage: React.FC<ProductImageProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full">
      <img
        loading="lazy"
        src={imageUrl}
        alt="Product illustration"
        className="w-full h-auto object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent -z-10 rounded-3xl" />
    </div>
  );
};
