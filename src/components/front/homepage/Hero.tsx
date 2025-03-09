
import React from 'react';
import PriceBadge from '../../PriceBadge';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../../../hooks/use-mobile';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handlePackagesClick = () => {
    navigate('/packages');
  };
  const isMobile = useMobile();

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#f4f5f5]"
      style={{ overflowX: 'hidden' }}
      dir={isMobile ? 'ltr' : 'rtl'}
    >
      <div className="relative">
        {/* Background Image - Hidden on Mobile */}
        <div 
          className="hidden md:block absolute w-full lg:w-[calc(45%+200px)] lg:-translate-x-[10rem] inset-y-0 left-0 h-[calc(100%-100px)] md:h-[calc(100%-200px)]"
          style={{
            backgroundImage: "url('https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/cover-mask.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backgroundBlendMode: 'multiply',
          }}
        />

        <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
          <div className="flex flex-wrap md:flex-wrap-reverse lg:flex-wrap items-center justify-between">
            {/* Left Section - Image */}
            <div className="w-1/2 md:w-full lg:w-[calc(50%+200px)] relative order-1 lg:order-2 -ml-32 md:ml-0">
              <div className="relative w-[200%] md:w-full lg:-translate-x-[10rem] lg:-translate-y-[3.125rem]">
                <img
                  src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/homepage-hero.png"
                  alt="מצרכים טריים"
                  className="w-full md:w-[90%] h-auto max-h-[35rem] object-contain rounded-3xl"
                />
                <div className="absolute -bottom-10 lg:-bottom-20 left-1/2 lg:left-[10rem] transform -translate-x-1/2 lg:-translate-x-8 z-20 scale-[0.65] lg:scale-80">
                  <PriceBadge
                    title="שמן קנולה"
                    price={6.90}
                    originalPrice={9.90}
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="w-1/2 md:w-full lg:w-[calc(50%-200px)] mb-12 lg:mb-0 text-right order-2 lg:order-1">
              <span className="text-base md:text-2xl text-[#05172C]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                חוסכים מאות שקלים
              </span>
              <h1 
                className="text-2xl md:text-5xl leading-tight mt-4 md:mt-8 mb-4 md:mb-8 text-[#05172C]" 
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                בכל קנייה!
              </h1>
              <p className="text-sm md:text-2xl text-[#264653] mb-4 md:mb-8">
                הצטרפו למהפכת הקניות של סמארט-בסקט והוסיפו כסף מכל קניה שלכם!
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-start">
                <button 
                  className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-[#00BAFF] text-white rounded-full text-sm md:text-base font-semibold"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  למבצעים
                </button>
                <button 
                  className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 border border-[#05172C] text-[#05172C] rounded-full text-sm md:text-base"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                  onClick={() => navigate('/shop')}
                >
                  לכל המוצרים
                </button>
              </div>
            </div>
          </div>

          {/* Popular Packages Title - Now properly positioned for mobile */}
          <div className="relative z-10 mt-32 md:mt-[-130px]">
            <div className=" md:bg-transparent py-8 md:py-0 -mx-4 md:mx-0">
              <h2 
                className="text-3xl md:text-4xl font-semibold text-[#05172C] mb-8 md:mb-10 text-center"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                המארזים הפופולרים
              </h2>
            </div>

            <div className="mt-0 md:mt-[-20px] relative z-10 max-w-[1000px] mx-auto scale-[0.85]">
              <Carousel />
              <div className="flex justify-center mt-12 md:mt-20">
                <button
                  className="w-[206px] h-[53px] rounded-full bg-[#00BAFF] text-white"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                  onClick={handlePackagesClick}
                >
                  לעוד מארזים
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
