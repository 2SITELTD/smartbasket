
import React from 'react';

const HeaderText: React.FC = () => {
  return (
    <div className="header-text-section absolute w-[552px] h-[273px] bg-white">
      <div className="text-group">
        <p className="text-xl font-normal text-[#05172C]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
          Check out our Best W
        </p>
        <div className="frame-1426 flex flex-col space-y-8">
          <div className="frame-1424 flex flex-col space-y-8">
            <p className="text-4xl font-normal text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              Check out our Best W
            </p>
            <p className="text-xl font-normal text-[#264653]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              Pellentesque et just
            </p>
          </div>
          <div className="frame-1425 flex space-x-5">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              Btn
            </button>
            <button className="px-8 py-3 border border-gray-500 text-gray-500 rounded-full font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              Btn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
