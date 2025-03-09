import React from 'react';

const SubscribeBanner: React.FC = () => {
  return (
    <section className="flex justify-center items-center w-full min-h-[120px] sm:min-h-[140px] md:h-[159px] bg-[#D2D2D2] py-6 sm:py-8 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1105px] gap-6 md:gap-4 px-4 sm:px-6 md:px-8">
        {/* Text Content - Moved to top for mobile */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-right order-1 md:order-2">
          <p 
            className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.4] md:leading-[24px] text-[#05172C]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            ה��שמה לרשימת התפוצה שלנו
          </p>
          <h2 
            className="text-[24px] sm:text-[28px] md:text-[34px] leading-[1.3] md:leading-[45px] text-[#05172C]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            !חסוך 20% בקניה הבאה שלך
          </h2>
        </div>

        {/* Email Input and Button */}
        <div className="flex items-center w-full md:w-auto order-2 md:order-1">
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="אימייל" 
              className="w-full md:w-[344px] h-[45px] sm:h-[50px] md:h-[53px] px-4 border border-[#D2D2D2] rounded-l-full text-[#768080] text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] outline-none focus:border-[#00BAFF]"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
              dir="rtl"
            />
            <button className="flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:w-[190px] h-[45px] sm:h-[50px] md:h-[53px] bg-[#00BAFF] text-white rounded-r-full transition-colors hover:bg-[#009ee0]">
              <span 
                className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                הרשמה
              </span>
              <i className="fas fa-paper-plane text-[14px] sm:text-[15px] md:text-[16px] mr-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBanner;
