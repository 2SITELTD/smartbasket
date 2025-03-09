
import React from 'react';

interface SlideProps {
  price: string;
  originalPrice: string;
  title: string;
  width: string;
  height: string;
  badgeWidth: string;
  badgeHeight: string;
}

const Slide: React.FC<SlideProps> = ({ price, originalPrice, title, width, height, badgeWidth, badgeHeight }) => {
  return (
    <div className={`slide bg-white shadow-md w-[${width}] h-[${height}]`}>
      <div className={`badge bg-yellow-400 shadow-md w-[${badgeWidth}] h-[${badgeHeight}]`}>
        <div className="price-content">
          <p className="text-lg font-bold text-red-500" style={{ fontFamily: 'PT Sans' }}>
            {price}
          </p>
          <p className="text-sm font-bold text-[#05172C]" style={{ fontFamily: 'PT Sans' }}>
            {originalPrice}
          </p>
          <p className="text-base font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const HeaderSlides: React.FC = () => {
  return (
    <div className="slides-preview-section flex flex-col space-y-10 w-[1105px] h-[499px] bg-white">
      <div className="text-section flex flex-col space-y-5">
        <p className="text-4xl font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
          Best Sellers This We
        </p>
      </div>
      <div className="frame-1361 flex space-x-3 w-[1105px] h-[283px]">
        <Slide 
          price="$49.99"
          originalPrice="$80.00"
          title="Weekly Veggie Bundle"
          width="345px"
          height="250px"
          badgeWidth="164.38px"
          badgeHeight="69px"
        />
        <Slide 
          price="$49.99"
          originalPrice="$80.00"
          title="Weekly Veggie Bundle"
          width="391px"
          height="283px"
          badgeWidth="204px"
          badgeHeight="87px"
        />
        <Slide 
          price="$49.99"
          originalPrice="$80.00"
          title="Weekly Veggie Bundle"
          width="345px"
          height="250px"
          badgeWidth="164.38px"
          badgeHeight="69px"
        />
      </div>
      <div className="navigation flex space-x-2">
        <div className="nav-dot bg-gray-300 w-3 h-3 rounded-full"></div>
        <div className="nav-dot bg-yellow-400 w-3 h-3 rounded-full"></div>
        <div className="nav-dot bg-gray-300 w-3 h-3 rounded-full"></div>
      </div>
      <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
        Btn
      </button>
    </div>
  );
};

export default HeaderSlides;
