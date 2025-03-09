
import React from 'react';
import { HeroImage } from './HeroImage';
import { HeroDescription } from './HeroDescription';

export const PackageHero: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32">
          {/* Content Column */}
          <div className="w-full lg:w-[47.1875rem] flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-6">
              <h1 
                className="text-[2rem] sm:text-[2.625rem] md:text-[3.5rem] leading-[1.2] font-bold text-[#05172C] max-w-[34.8125rem]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                ?כשאפשר לחסוך
              </h1>
              <p 
                className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[1.47] text-[#264653]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                .המוצרים שלנו נבחר במיוחד עבורכם – לכל צורך, אירוע או קנייה בסיסית
                <br />
                כל מארז כולל את המצרכים הכי רלוונטיים, במחיר חזול בשוק ועם חנויה מטורפת
                <br />
                .שלא תמצאו בשום מקום אחר. במקום לבזבז זמן ולהרכיב את הסל בעצמכם
                <br />
                .בחרו מארז בקליק אחד ושלחו אותו ישירות לעגלה
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full lg:w-[32.5625rem] h-[25rem] sm:h-[29.125rem]">
            {/* Main Frame */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32.5625rem] h-[29.125rem] bg-white rounded-lg p-5">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/package-hero.png"
                    alt="מארז מוצרים"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -left-1 w-[46.625rem] h-[44.821rem] border-4 border-[#9CE5FF] rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
