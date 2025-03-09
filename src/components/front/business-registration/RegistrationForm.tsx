import React from 'react';
import { FormField } from './FormField';

export const RegistrationForm: React.FC = () => {
  return (
    <div className="shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white min-h-[630px] w-full mt-[30px] p-10 rounded-[18px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch flex-1 max-md:max-w-full">
        <div className="flex w-[111px] max-w-full flex-col items-stretch text-2xl text-[#05172C] font-semibold text-right leading-none">
          <div>מילוי פרטים</div>
          <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px]" />
        </div>
        <div className="bg-[#D2D2D2] flex min-h-px w-full mt-4 max-md:max-w-full" />
        
        <form className="shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white w-full text-sm font-normal leading-loose flex-1 mt-4 p-5 rounded-xl max-md:max-w-full">
          <div className="flex w-full gap-4 flex-wrap max-md:max-w-full">
            <FormField
              label="שם משפחה:"
              name="lastName"
              value="ישראלי"
            />
            <FormField
              label="שם פרטי:"
              name="firstName"
              value="ישראל"
            />
          </div>
          
          <div className="flex w-full gap-4 flex-wrap mt-3 max-md:max-w-full">
            <FormField
              label="אימייל:"
              name="email"
              type="email"
              value="israelisraeli@gmail.com"
            />
            <FormField
              label="שם העסק:"
              name="businessName"
              placeholder="לדוגמא: שוק העיר, עידן2000"
            />
          </div>
          
          <div className="flex w-full gap-4 flex-wrap mt-3 max-md:max-w-full">
            <FormField
              label="מה המוצרים העיקריים שאתם מוכרים?"
              name="mainProducts"
              placeholder="לדוגמא: מוצרי חלב, מוצרי חשמל, בגדים והנעלה..."
            />
            <FormField
              label="סוג העסק:"
              name="businessType"
              placeholder="לדוגמא: חנות צעצועים, מעדנייה, סופר שכונתי..."
            />
          </div>
          
          <div className="flex w-full items-stretch gap-4 flex-1 h-full mt-3 max-md:max-w-full">
            <FormField
              label="סוג העסק:"
              name="additionalInfo"
              type="textarea"
              placeholder="כתבו כאן כל מידע נוסף שחשוב שנדע על העסק שלכם."
            />
          </div>
        </form>
      </div>
      <button className="justify-center text-white shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-[#00BAFF] flex min-h-[52px] w-full gap-2.5 mt-4 py-5 rounded-[103px] max-md:max-w-full">
        שלחו פרטים
      </button>
    </div>
  );
};