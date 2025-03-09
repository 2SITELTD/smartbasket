import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { SectionCard } from './SectionCard';
import { ActionButton } from './ActionButton';
import { ProductItem } from './ProductItem';
import CategoryList from './CategoryList';
import { selectProducts } from '../../../store/productSlice'
import  {TagManagement} from '../../../pages/backoffice/TagManagement'; // Import the TagManagement component


export const GeneralManagement: React.FC = () => {
  const [isTagManagementOpen, setIsTagManagementOpen] = useState(false); // State to manage popup visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTagClick = () => {
    setIsTagManagementOpen(true);
  };

  const closeTagManagement = () => {
    setIsTagManagementOpen(false);
  };

  const handleInventoryClick = () => {
    navigate('/backoffice/ProductInventory'); // Navigate to ProductInventory page
  };

  const handleAddProductClick = () => {
    navigate('/backoffice/ProductManagement');
  };

  const handleCategoryClick = () => {
    navigate('/backoffice/CategoryManagement'); // Navigate to CategoryManagement page
  };
  // const products = useSelector(selectProducts);
  // console.log(products)

  const products = [
    {
      quantity: 333,
      name: 'חלב טרי 3%',
      currentPrice: '₪8.90',
      originalPrice: '₪10.90',
      image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/milk.png'
    },
    {
      quantity: 0,
      name: 'לחם אחיד פרוס',
      currentPrice: '₪8.90',
      originalPrice: '₪10.90',
      image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/bread.png',
      isOutOfStock: true
    },
    {
      quantity: 13,
      name: 'עוגיות תפוח',
      currentPrice: '₪12.90',
      originalPrice: '₪18.90',
      image: 'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/argaliot.png'
    }
  ];

  return (
    <SectionCard title="ניהול כללי">
      <div className="flex flex-col gap-4 mb-8">
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <ActionButton label="הוסף מוצר חדש" onClick={handleAddProductClick} />
            <div className="w-px h-10 bg-[#D2D2D2] my-1.5" />
            <ActionButton label="ערוך" variant="secondary" />
          </div>
          <h3 
            className="text-right text-[#05172C] text-[1.75rem] font-semibold leading-[1.6875rem]"
          >
            מוצרים
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
                מוצרים שנוספו לאחרונה
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
          <CategoryList 
            categories={['מלאי כללי', 'קטגוריות', 'תגיות']} 
            onTagClick={handleTagClick} // Pass the click handler to CategoryList
            onInventoryClick={handleInventoryClick} // Pass the inventory click handler to CategoryList
            onCategoryClick={handleCategoryClick} // Pass the category click handler to CategoryList
          />
        </div>
      </div>
      {isTagManagementOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeTagManagement} // Close popup on background click
        >
          <div 
            className="bg-white w-[100%] max-w-[1200px] h-[90%] p-4 rounded-lg shadow-lg overflow-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <button 
              onClick={closeTagManagement} 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button> {/* Ensure the button is labeled "X" */}
            <TagManagement score={0} maxScore={100} />
          </div>
        </div>
      )}
    </SectionCard>
  );
};
