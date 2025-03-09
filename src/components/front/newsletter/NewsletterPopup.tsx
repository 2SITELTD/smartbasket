import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterPopup: React.FC<NewsletterPopupProps> = ({
  isOpen,
  onClose
}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-[898px] p-0">
        <div className="flex">
          {/* Left Column - Form */}
          <div className="flex-1 p-10">
            <div className="flex flex-col gap-[30px]">
              {/* Header */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-[11px]">
                    <h2 
                      className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
                      style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                    >
                      הסכמת? אהבתם? בואו לקבל עוד מתנות!
                    </h2>
                    <div className="h-[3px] w-[389px] bg-[#00BAFF]" />
                  </div>
                  <button 
                    onClick={onClose}
                    className="text-[#05172C] hover:text-[#778080] transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="h-[1px] w-full bg-[#D2D2D2]" />
                <p 
                  className="text-[20px] leading-[22px] text-[#05172C]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  הצטרפו לניוזלטר של Smartbasket וקבלו יותר:
                  <br />• קופונים בלעדיים שישאירו את הארנק שלכם שמח.
                  <br />• הטבות מיוחדות ועדכונים חמים לפני כולם.
                  <br />• טיפים חכמים שיעזרו לכם לחסוך בכל קנייה.
                </p>
              </div>

              {/* Form */}
              <div className="bg-white rounded-lg shadow-md p-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label 
                        htmlFor="firstName"
                        className="text-[14px] text-[#05172C]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        שם פרטי:
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label 
                        htmlFor="lastName"
                        className="text-[14px] text-[#05172C]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        שם משפחה:
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label 
                      htmlFor="email"
                      className="text-[14px] text-[#05172C]"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    >
                      כתובת אימייל:
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3 px-1">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1.5 h-3 w-3 border border-[#00BAFF] rounded"
                    />
                    <label 
                      htmlFor="terms"
                      className="text-[14px] leading-[22px] text-[#778080]"
                      style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                    >
                      אני מאשר/ת קבלת עדכונים, קופונים ותכנים שיווקיים לכתובת האימייל שלי.
                      <br />
                      <a href="#" className="text-[#00BAFF] hover:underline">
                        לקריאת התקנון המלא, לחצו כאן
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px] mt-2"
                    style={{ fontFamily: 'Ploni ML v2 AAA' }}
                  >
                    הרשמה
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="w-[307.5px] bg-white p-10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/assets/newsletter-illustration.svg" 
                alt=""
                className="w-[308px] h-[244px]"
              />
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
