import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white" dir="rtl">
      {/* Footer Main */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-around md:gap-24">
          {/* Footer Links - Hidden on Mobile */}
          <div className="hidden md:flex gap-16">
            {/* Product Categories */}
            <div>
              <h3 
                className="text-[22px] leading-[30px] text-[#05172C] mb-8"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                קטגוריות מוצרים
              </h3>
              <ul className="space-y-4">
                {[
                  'פירות וירקות',
                  'חטיפים ושימורים',
                  'דגנים ופסטה',
                  'קפה ותה',
                  'מאפיה',
                  'תבלינים',
                  'שמנים ורטבים'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-32">
                    <span 
                      className="text-[#0A6F94] text-base"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    >
                      {item}
                    </span>
                    <span className="text-[#00BAFF] text-xs">•</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 
                className="text-[22px] leading-[30px] text-[#05172C] mb-8"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                שירות לקוחות
              </h3>
              <ul className="space-y-4">
                {[
                  'אזור אישי',
                  'משלוחים ותשלומים',
                  'FAQ',
                  'שירות לקוחות',
                  'אישורים רישיונות',
                  'שותפים'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-32">
                    <span 
                      className="text-[#0A6F94] text-base"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    >
                      {item}
                    </span>
                    <span className="text-[#00BAFF] text-xs">•</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 
                className="text-[22px] leading-[30px] text-[#05172C] mb-8"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                קישורים
              </h3>
              <ul className="space-y-4">
                {[
                  'אודות',
                  'צור קשר',
                  'קניה לפי קטגוריה',
                  'מאמרים רלוונטיים',
                  'שופינג',
                  'FAQs'
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="text-[#0A6F94] text-base"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo and Contact - Always Visible */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="w-[150px] h-[123px] md:w-[189px] md:h-[155px]">
              <img
                src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/footer-logo.png"
                alt="Smart Basket"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6">
              <FontAwesomeIcon icon={faFacebook} className="text-[#0A6F94] text-xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-[#0A6F94] text-xl" />
              <FontAwesomeIcon icon={faWhatsapp} className="text-[#0A6F94] text-xl" />
              <FontAwesomeIcon icon={faYoutube} className="text-[#0A6F94] text-xl" />
              <FontAwesomeIcon icon={faLinkedin} className="text-[#0A6F94] text-xl" />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] bg-white shadow-md rounded flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#051B2C]" />
                </div>
                <span className="text-[#051B2C] text-lg md:text-xl" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                  כתובת המשרד
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] bg-white shadow-md rounded flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="text-[#051B2C]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#768080] text-base md:text-xl" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                    ראשון עד חמישי: 9:00 - 21:00
                  </span>
                  <span className="text-black text-lg md:text-xl" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                    08-7998989
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-[#EBEBEB] py-4">
        <div className="container mx-auto px-4 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#778080] text-xs sm:text-sm">
            <span>©</span>
            <span>Smart-basket. כל הזכויות שמורות</span>
          </div>
          <div className="flex justify-center sm:justify-start gap-4">
            <img src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/visa.png" alt="Visa" className="w-[35px] h-[26px] md:w-[42px] md:h-[31px]" />
            <img src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/mc.png" alt="MasterCard" className="w-[35px] h-[26px] md:w-[42px] md:h-[31px]" />
            <img src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/paypal.png" alt="PayPal" className="w-[35px] h-[26px] md:w-[42px] md:h-[31px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;