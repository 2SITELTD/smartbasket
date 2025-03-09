import React from 'react';
import { RegistrationHeader } from '../../components/front/business-registration/RegistrationHeader';
import { RegistrationForm } from '../../components/front/business-registration/RegistrationForm';

export const BusinessRegistrationForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#f2f9f9]">
      <div className="w-full max-w-[1104px]">
        <div className="flex flex-col md:flex-row gap-[30px] mb-[30px] mt-5">
          <div className="justify-center items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-h-[242px] flex-col w-full md:w-[271px] py-[22px] rounded-[18px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/40edd01536a6a34d413cc0057f8e396650ff414e28a6ae428d2dcc55ef460bed?placeholderIfAbsent=true"
              className="aspect-[1.07] object-contain w-[210px] max-w-full"
              alt="Business registration"
            />
          </div>
          <div className="justify-center items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex flex-col text-right flex-1 p-10 rounded-[18px] max-md:px-5">
            <div className="flex w-full gap-2.5">
              <div className="flex w-full flex-col items-stretch">
                <div className="flex w-[426px] max-w-full flex-col items-stretch text-2xl text-[#05172C] font-semibold leading-none">
                  <div className="max-md:max-w-full">
                    בואו לחשוף את העסק שלכם לקהל רחב יותר!
                  </div>
                  <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px]" />
                </div>
                <div className="bg-[#D2D2D2] flex min-h-px w-full mt-4" />
                <div className="text-black text-xl font-normal leading-[22px] mt-4">
                  <span style={{ fontSize: "1px", color: "rgba(0,0,0,1)" }}>ה</span>
                  Smarkbasket היא פלטפורמת קניות חדשנית המרכזת מבצעים ממגוון ספקים
                  מובילים ומחברת אתכם לאלפי לקוחות מדי יום.
                  <br />
                  כדי להציג את המוצרים שלכם בצורה הטובה ביותר, נשמח לקבל פרטים על
                  העסק שלכם:
                  <br />
                  שם העסק, סוגו והמוצרים שאתם מציעים. הפרטים נשמרים בצורה מאובטחת
                  <br />
                  ומשמשים אך ורק לתהליך הרישום.
                </div>
              </div>
            </div>
          </div>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};