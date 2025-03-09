import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faClock, faLeaf } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faTruck,
    title: 'משלוחים עד הבית',
    description: 'מזמינים עכשיו ומקבלים בפתח הדלת'
  },
  {
    icon: faClock,
    title: 'שעות פעילות',
    description: 'א-ה: 9:00 - 21:00'
  },
  {
    icon: faLeaf,
    title: 'שומרים על הסביבה',
    description: 'אנחנו דואגים לארץ באריזות אורגניות ששומרות על איכות הסביבה'
  }
];

const ProductFeatures: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex items-center gap-5"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon 
              icon={feature.icon} 
              className="text-[#264653] text-2xl"
            />
          </div>
          <div className="flex-1">
            <h3 
              className="text-[22px] font-semibold text-[#264653] mb-3"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
            >
              {feature.title}
            </h3>
            <p 
              className="text-sm text-[#264653]"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;
