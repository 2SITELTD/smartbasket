import React from 'react';
import { SectionCard } from './SectionCard';
import { ActionButton } from './ActionButton';
import { ProductItem } from './ProductItem';
import CategoryList from './CategoryList';
import { useNavigate } from 'react-router-dom';

export const PackageManagement: React.FC = () => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate('/backoffice/PackageManagement');
    };

    const handleAddNewPackageClick = () => {
        navigate('/backoffice/PackageEditor');
    };

    const categories = [
        "מלאי מארזים"
    ];

    const products = [
        {
          quantity: 333,
          name: 'חלב טרי 3%',
          currentPrice: '₪8.90',
          originalPrice: '₪10.90',
          image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/milk.png'
        }
      ];
  return (
    <SectionCard title="ניהול מארזים">
      <div className="flex flex-col gap-4 mb-8">
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <ActionButton label="הוסף מארז חדש" onClick={handleAddNewPackageClick} />
            <div className="w-px h-10 bg-[#D2D2D2] my-1.5" />
            <ActionButton label="ערוך" variant="secondary" />
          </div>
          <h3 
            className="text-right text-[#05172C] text-[1.75rem] font-semibold leading-[1.6875rem]"
          >
           מארזים
          </h3>
        </div>
      </div>
      <div className="flex gap-8">
        {/* Left Column - Products List */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-8">
            <div className="flex flex-col gap-4">
              <h3 
                className="text-[22px] leading-[25px] font-semibold text-[#05172C]"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                מארזים שנוספו לאחרונה
              </h3>
              <div className="w-full h-px bg-[#D2D2D2]" />
              
              {/* Product Items */}
              <div className="flex flex-col gap-4">
                {products.map((product, index) => (
                  <ProductItem key={index} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Categories */}
        <div className="w-[348px]">
          <div onClick={handleCategoryClick}>
            <CategoryList categories={categories} />
          </div>
        </div>
      </div>
    </SectionCard>
  );
};
