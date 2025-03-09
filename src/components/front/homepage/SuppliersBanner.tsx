import React from 'react';

const SuppliersBanner: React.FC = () => {
  return (
    <section className="flex justify-center py-16" dir="rtl">
      <div 
        className="relative bg-cover bg-center rounded-tl-[18px]"
        style={{ 
          width: '1841px',
          height: '455.3px',
          backgroundImage: 'url(https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/new-customers.png)',
        }}
      >
        {/* Content */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-2xl flex flex-col items-center gap-[30px] text-center">
            <div className="flex flex-col gap-[30px]">
              <h2 
                className="text-4xl lg:text-[52px] leading-[60px] text-[#05172C] font-semibold"
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
              >
                רוצים להגיע לאלף לקוחות חדשים?
              </h2>
              <p 
                className="text-xl lg:text-2xl leading-[28.125px] text-[#264653]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                Smarkbasket מחברת את המוצרים שלכם לקהל הרחב ומרכזת מבצעים מהספקים המובילים.
                ספרו לנו קצת על העסק שלכם והתחילו למכור יותר!
              </p>
            </div>

            <button 
              className="w-fit px-[30px] py-5 bg-[#00BAFF] text-white rounded-lg shadow-md"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              <span className="text-xl font-semibold">
                לדף ספקים
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuppliersBanner;