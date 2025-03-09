
import React from 'react';
import HeaderBadge from './HeaderBadge';
import HeaderText from './HeaderText';
import HeaderSlides from './HeaderSlides';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container bg-white">
      {/* Header Background */}
      <div className="header-bg w-full h-[851px] bg-white backdrop-blur-md"></div>

      {/* Main Content */}
      <div className="header-content relative w-full h-[856px] bg-white">
        {/* Image Section */}
        <div className="image-section relative w-[1108.52px] h-[1106px] bg-gray-300">
          <div className="cover-mask absolute w-[1503.61px] h-[1564px] bg-green-500 border border-blue-500 rounded-full"></div>
          <div className="transparent-placeholder absolute w-[1326.19px] h-[853.09px]"></div>
        </div>

        {/* Badge Section */}
        <HeaderBadge price="$8.99" originalPrice="$12.99" text="Check out our Best W" />

        {/* Header Text Section */}
        <HeaderText />

        {/* Slides Preview Section */}
        <HeaderSlides />
      </div>
    </div>
  );
};

export default Header;
