import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Heart from '../../Heart'
import { PackageItem } from './PackageData';

interface PackageCardProps {
  packageItem: PackageItem;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageItem }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-10 gap-8" style={{ width: '69rem', height: '22.438rem' }}>
      {/* Image Section */}
      <div className="flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden" style={{ width: '17.438rem', height: '17.438rem' }}>
        <img
          src={packageItem.image}
          alt={packageItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between" style={{ width: '44.688rem' }}>
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[#FC4B4E] text-[2.25rem] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              ₪{packageItem.price.toFixed(2)}
            </span>
            <span className="text-[#778080] text-[1.375rem] line-through" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              ₪{packageItem.originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[#05172C] text-[1.5rem] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              {packageItem.title}
            </span>
            <div className="w-full h-[0.188rem] bg-[#00BAFF]"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.063rem] bg-[#D2D2D2] my-4"></div>

        {/* Description */}
        <p className="text-[#05172C] text-[1.25rem] whitespace-pre-line" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
          {packageItem.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-4">
          <button className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-full">
            {/* <FontAwesomeIcon icon={faHeart} className="text-[#05172C] text-lg" /> */}
            <Heart id={packageItem.id} entity='package' />
          </button>
          <button className="flex items-center justify-center px-8 py-3 border border-[#778080] rounded-full text-[#778080] text-[1.25rem] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
            לפרוט המארז
          </button>
          <button className="flex items-center justify-center px-8 py-3 bg-[#00BAFF] text-white rounded-full text-[1.25rem] font-semibold shadow-md" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
            שלח לעגלה
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
