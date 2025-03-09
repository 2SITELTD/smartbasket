import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[609px] bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/door.png"
          alt="Door with packages"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        {/* Main Text */}
        <h1 
          className="text-[32px] sm:text-[42px] md:text-[52px] leading-[1.15] sm:leading-[1.2] md:leading-[60px] font-semibold text-[#05172C] mb-3 sm:mb-4"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          !מגיעים עד לפתח הדלת
        </h1>

        {/* Subtext */}
        <p 
          className="text-[18px] sm:text-[20px] md:text-[24px] leading-[1.4] sm:leading-[1.5] md:leading-[35px] text-[#264653] mb-6 sm:mb-8"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          משלוחים בפריסה ארצית!<br />
          חוסכים בכל קניה והנים ממשלוח עד הבית
        </p>

        {/* Button */}
        <button className="flex items-center justify-center gap-1.5 sm:gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#00BAFF] text-white rounded shadow-md transition-transform hover:scale-105 active:scale-95">
          <span 
            className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            08-989898
          </span>
          <div className="w-3 h-3 sm:w-4 sm:h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 10h4l3 9 4-18 3 9h4" 
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Decorative Ellipse - Commented out for now */}
      {/* <div
        className="absolute top-[-300px] right-[-300px] w-[1200px] h-[1200px] bg-[#00BAFF] opacity-20"
        style={{
          clipPath: 'path("M600,0 A600,600 0 0,1 1200,600 L600,600 Z")',
        }}
      ></div> */}
    </section>
  );
};

export default Banner;
