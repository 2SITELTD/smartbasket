import React from 'react';

export const RegistrationHeader: React.FC = () => {
  return (
    <div className="flex w-full gap-[30px] flex-wrap max-md:max-w-full">
      <div className="justify-center items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-w-60 min-h-[242px] flex-col w-[271px] py-[22px] rounded-[18px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/40edd01536a6a34d413cc0057f8e396650ff414e28a6ae428d2dcc55ef460bed?placeholderIfAbsent=true"
          className="aspect-[1.07] object-contain w-[210px] max-w-full"
          alt="Business registration"
        />
      </div>
      <div className="justify-center items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-w-60 flex-col text-right flex-1 shrink basis-[0%] p-10 rounded-[18px] max-md:max-w-full max-md:px-5">
        <div className="flex w-full gap-2.5 max-md:max-w-full">
          <div className="flex min-w-60 w-full flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-[426px] max-w-full flex-col items-stretch text-2xl text-[#05172C] font-semibold leading-none">
              <div className="max-md:max-w-full">
                בואו לחשוף את העסק שלכם לקהל רחב יותר!
              </div>
              <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px] max-md:max-w-full" />
            </div>
            <div className="bg-[#D2D2D2] flex min-h-px w-full mt-4 max-md:max-w-full" />
            <div className="text-black text-xl font-normal leading-[22px] mt-4 max-md:max-w-full">
              <span style={{ fontSize: "1px", color: "rgba(0,0,0,1)" }}>ה</span>
              Smarkbasket היא פלטפורמת קניות חדשנית המרכזת מבצעים ממגוון ספקים
              מובילים ומחברת אתכם לאלפי לקוחות מדי יום.
              <br />
              כדי להציג את המוצרים שלכם בצורה הטובה ביותר, נשמח לקבל פרטים על
              העסק שלכ��:
              <br />
              שם העסק, סוגו והמוצרים שאתם מציעים. הפרטים נשמרים בצורה מאובטחת
              <br />
              ומשמשים אך ורק לתהליך הרישום.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};