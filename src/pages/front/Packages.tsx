
import React from 'react';
import {PackageHero} from '../../components/front/packageFront/PackageHero';
import PackageList from '../../components/front/packageFront/PackageList';
import ProductShowcase from '../../components/front/packageFront/ProductShowcase';

const Packages: React.FC = () => {
  return (
    <div className='bg-[#f4f5f5] min-h-screen'>
      <div className="container mx-auto px-4">
        <PackageHero />
        <PackageList />
        <ProductShowcase />
      </div>
    </div>
  );
};

export default Packages;
