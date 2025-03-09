import React from 'react';

const Questionaire: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-12 w-[975px] py-16">
        {/* Top Frame with Icon and Title */}
        <div className="flex items-center gap-8 w-full">
          <h1 
            className="text-[56px] leading-[70px] text-[#05172C] font-semibold"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
           👋 !בואו נכיר ונשפר את החוויה
          </h1>
        </div>

        {/* Description Text */}
        <p 
          className="text-2xl leading-[35px] text-[#264653] w-full"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוז בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי ממש. הרבון ותלברו ותמשח לכימפו – לתכי מורגם בורק? לתיג ישבעס.
        </p>

        {/* Button Frame */}
        <div className="flex gap-5">
          <button 
            className="w-[206px] h-[53px] bg-[#00BAFF] text-white rounded-full font-semibold text-xl leading-[29px]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            התחילו את השאלון
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionaire;