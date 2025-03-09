import React from 'react';
import { useNavigate } from 'react-router-dom';



const Banners: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-8 sm:py-12 md:py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Banner Big */}
          <div className="w-full md:w-2/3 relative bg-white rounded-lg shadow-md">
            {/* Content Container */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Text Content */}
              <div className="flex flex-col justify-center p-6 sm:p-8 gap-3 sm:gap-4 md:w-[343px]">
                <span 
                  className="text-sm sm:text-base font-semibold text-[#05172C]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  מבצעים שבועיים
                </span>
                <h2 
                  className="text-3xl sm:text-[40px] leading-tight sm:leading-[60px] font-semibold text-[#FC4B4E]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  חוסכים לפחות 40%
                </h2>
                <p 
                  className="text-sm sm:text-base leading-normal sm:leading-[22px] text-[#264653]"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                >
                  בסופרמרקט תהנו ממבצעים שבועיים שיוזילו
                  את העגלה שלכם בכל סכום!
                </p>
                <button 
                  className="w-fit mt-2 sm:mt-4 px-6 sm:px-[30px] py-3 sm:py-5 bg-[#00BAFF] text-white rounded-lg"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                  onClick={() => {
                    navigate('/shop');
                  }}
                >
                  <span className="text-base sm:text-xl font-semibold">
                    לכל המוצרים
                  </span>
                </button>
              </div>

              {/* Image */}
              <div className="relative w-full md:w-[382px] aspect-[382/333] md:aspect-auto">
                <img
                  src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/basket.png"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          {/* Banner Small */}
          <div 
            className="w-full md:w-1/3 relative bg-white rounded-lg shadow-md overflow-hidden aspect-[344/333]"
          >
            <img
              src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/our-choice.png"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
              <h3 
                className="text-xl sm:text-[22px] leading-tight sm:leading-[32px] font-semibold text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                ייצור עצמי
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
