import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';


const ActionButton: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    console.log("onNext");
    navigate('/checkout');
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="w-full max-w-[1104px] h-[53px] flex items-center justify-between gap-[30px] mx-auto mt-5">
      {/* Checkout Button */}
      <button
        onClick={handleCheckoutClick}
        className="w-[365px] h-[52.34px] bg-[#00BAFF] rounded-full flex items-center justify-center"
      >
        <span 
          className="text-white text-[20px] font-semibold leading-[29.4px]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          מעבר לתשלום
        </span>
      </button>

      {/* Info and Back Button Section */}
      <div className="flex items-center justify-around w-[709px] h-[40px]">
        {/* Info Message */}
        <div className="hidden md:flex flex-col ">
          <span
            className="text-[14px] font-semibold leading-[20.57px] text-[#264653]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            משלוחים חינם לקניות מעל 400 ₪
          </span>
          <span
            className="text-[11px] leading-[16.17px] text-[#05172C]"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            כולל מע״מ
          </span>
        </div>

        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-[14px] font-semibold leading-[20.57px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          <span>חזרה להמשך קנייה</span>
          <div className="w-[20px] h-[20px] rounded-full bg-[#00BAFF] flex items-center justify-center">
            <ChevronLeft className="w-[9px] h-[14px] text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionButton;