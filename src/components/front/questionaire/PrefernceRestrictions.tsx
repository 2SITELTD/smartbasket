import React from 'react';
import { useNavigate } from 'react-router-dom';



const PreferencesRestrictions: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/preferences/allergies');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-12 w-full max-w-[975px] py-16 bg-white shadow-md rounded-lg">
        {/* Header Section */}
        <div className="flex items-center gap-8 w-full">
          <h1 
            className="text-[70px] leading-[70px] text-[#05172C] font-semibold text-center"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            👋 !בואו נכיר ונשפר את החוויה
          </h1>
        </div>

        {/* Description Text */}
        <p 
          className="text-[24px] leading-[35px] text-[#264653] w-full text-center px-4"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוז בעריר נך ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי ממש. הרבון ותלברו ותמשח לכימפו – לתכי מורגם בורק? לתיג ישבעס.
        </p>

        {/* Button */}
        <button 
          onClick={handleStart}
          className="w-[210px] h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px] shadow-md"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          התחילו את השאלון
        </button>
      </div>
    </div>
  );
};

export default PreferencesRestrictions;