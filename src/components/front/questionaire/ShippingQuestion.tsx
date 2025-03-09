import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressIndicator } from './ProgressIndicator';
import { ShippingField } from './ShippingField';
import { NoService } from './NoService';

const ShippingQuestion: React.FC = () => {
  const [isOutOfRange, setIsOutOfRange] = useState(false);
  const navigate = useNavigate();

  const handleCloseNoService = () => {
    setIsOutOfRange(false);
  };

  const handleBack = () => {
    navigate('/preferences/allergies');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 md:py-12 bg-gray-200 px-4">
      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[1104px]">
        {/* Out of Range Message */}
        {isOutOfRange && (
          <NoService onClose={handleCloseNoService} />
        )}

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={2} totalSteps={2} />

        {/* Title */}
        <h1 
          className="text-[32px] md:text-[52px] leading-[40px] md:leading-[60px] text-[#05172C] font-semibold w-full max-w-[896px] text-center"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          ?לאן לשלוח את השליח
        </h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row md:gap-[120px] w-full items-center">
          {/* Image Container */}
          <div className="relative w-full md:w-[473px] h-[300px] md:h-[478px] mb-8 md:mb-0">
            <div className="absolute inset-0">
              <div className="relative w-full md:w-[663px] h-full">
                <img 
                  src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/truck.png" 
                  alt="Delivery Van"
                  className="absolute w-full md:w-[663px] h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Divider - Only visible on desktop */}
          <div className="hidden md:block w-px h-[351px] my-[70px] bg-[#D2D2D2]" />

          {/* Form Container */}
          <div className="w-full md:flex-1 md:max-w-[365px]">
            <div className="bg-white shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-6 md:p-10 rounded-lg">
              <div className="flex flex-col gap-4 w-full md:w-[285px]">
                <ShippingField 
                  label="עיר" 
                  onChange={(value) => {
                    setIsOutOfRange(value.toLowerCase() === 'out of range');
                  }}
                />
                <ShippingField label="רחוב ומספר" />
                <ShippingField label="מספר בית/דירה" />
                <ShippingField label="קומה" />
                <ShippingField label="מיקוד" />
                
                <div className="w-full h-px bg-[#D2D2D2] my-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center">
          <button 
            onClick={handleBack}
            className="w-full md:w-[170px] h-[52px] bg-gray-300 text-black rounded-full font-semibold text-[18px] md:text-[20px] leading-[29px] shadow-md"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            לשאלה הקודמת
          </button>
          <button 
            className="w-full md:w-auto px-[30px] py-5 bg-[#00BAFF] rounded-full shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] text-white"
          >
            <span 
              className="text-lg md:text-xl font-semibold"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              המשך
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingQuestion;
