import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PromotionalBanner: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={`relative w-full h-[333px] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/bottomBannerCatalog.png"
          alt="Promotional Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-[481px] text-right">
          {/* Weekly Discounts */}
          <h3 
            className="text-[16px] leading-[24px] text-[#05172C] mb-2"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            מבצעים שבועיים
          </h3>

          {/* Discount Text */}
          <h2 
            className="text-[52px] leading-[60px] font-semibold text-[#00BAFF] mb-4"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            40% חיסכון ממוצע
          </h2>

          {/* Description */}
          <p 
            className="text-[16px] leading-[22px] text-[#264653] mb-6"
            style={{ fontFamily: 'PT Sans' }}
          >
            Cras tincidunt lobortis feugiat vivamus. Laoreet id donec ultrices tincidunt. Lectus quam id leo in vitae
          </p>

          {/* Button */}
          <button
            className="w-[292px] h-[52px] border border-[#05172C] rounded-full text-[16px] leading-[23px] text-[#05172C] transition-colors hover:bg-[#05172C] hover:text-white"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            onClick={() => navigate('/shop')}
          >
            לכל המוצרים
          </button>
        </div>
      </div>
    </div>
  );
};
