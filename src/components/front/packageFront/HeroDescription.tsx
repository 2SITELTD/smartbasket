
import React from 'react';

export const HeroDescription: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-lg text-[#05172C] mb-2">למה לשלם יותר</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-[#05172C] mb-6">
        כשאפשר לחסוך?
      </h2>
      <p className="text-lg text-[#264653] leading-relaxed">
        המוצרים שלנו נבחרו במיוחד עבורכם – לכל צורך, אירוע או קנייה בסיסית.
        כל מארז כולל את המצרכים הכי רלוונטיים, במחיר הזול בשוק ועם חנויה מטורפת
        שלא תמצאו בשום מקום אחר. במקום לבזבז זמן ולהרכיב את הסל בעצמכם,
        בחרו מארז בקליק אחד ושלחו אותו ישירות לעגלה.
      </p>
    </div>
  );
};
