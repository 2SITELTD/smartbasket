import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProgressIndicator } from './ProgressIndicator';
import { useNavigate } from 'react-router-dom';
import { ShippingField } from './ShippingField';
import { NoService } from './NoService';


// interface AllergyQuestionProps {
//   onNext: () => void;
// }



interface Tag {
  id: string;
  label: string;
  isSelected: boolean;
}

const AllergyQuestion: React.FC = () => {

  const onNext = () => {
    console.log("onNext");
    navigate('/preferences/shipping'); // Navigate to the shipping route
  };

  const [tags, setTags] = useState<Tag[]>([
    { id: '1', label: 'רגישות לגלוטן', isSelected: false },
    { id: '2', label: 'צמחוני', isSelected: false },
    { id: '3', label: 'טבעוני', isSelected: false },
    { id: '4', label: 'רגישות לבוטנים', isSelected: false },
    { id: '5', label: 'רגישות לדגים', isSelected: false },
    { id: '6', label: 'רגישות ללקטוז', isSelected: true },
  ]);

  const [customAllergies, setCustomAllergies] = useState<string[]>(['אלרגיה לשומשום']);
  const [newAllergy, setNewAllergy] = useState('');
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  const navigate = useNavigate();

  const toggleTag = (id: string) => {
    setTags(tags.map(tag => 
      tag.id === id ? { ...tag, isSelected: !tag.isSelected } : tag
    ));
  };

  const handleSkip = () => {
    navigate('/preferences/shipping');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 sm:py-12 bg-gray-200 px-4">
      <div className="flex flex-col items-center gap-6 sm:gap-12 w-full max-w-[1104px]">
        {isOutOfRange && (
          <NoService onClose={() => setIsOutOfRange(false)} />
        )}

        <ProgressIndicator currentStep={1} totalSteps={2} />

        <h1 
          className="text-[32px] sm:text-[52px] leading-[40px] sm:leading-[60px] text-[#05172C] font-semibold w-full max-w-[896px] text-center"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          האם יש לך אלרגיות?
        </h1>

        <div className="flex flex-col w-full gap-6 sm:gap-8">
          {/* Image - Moved to top on mobile */}
          <div className="relative w-full aspect-[473/478] sm:hidden">
            <img 
              src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/allergies.png" 
              alt="Allergies"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full max-w-[365px] mx-auto">
            <div className="bg-white shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-6 sm:p-10 rounded-lg">
              {/* Tags Section */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <h2 
                  className="text-[20px] sm:text-[24px] leading-[24px] sm:leading-[27px] text-[#042633] font-semibold text-right"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                >
                  יש לבחור מה שרלוונטי עבורך
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-end">
                  {tags.map(tag => (
                    <button
                      key={tag.id}
                      onClick={() => toggleTag(tag.id)}
                      className={`px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full border text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] font-semibold transition-colors
                        ${tag.isSelected 
                          ? 'bg-[#00BAFF] text-white border-transparent' 
                          : 'bg-white text-[#778080] border-[#778080]'}`}
                      style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input Section */}
              <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
                <h2 
                  className="text-[28px] sm:text-[34px] leading-[40px] sm:leading-[50px] text-[#042633] font-semibold text-right"
                  style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                >
                  משהו שלא נמצא ברשימה?
                </h2>
                <div className="flex flex-col gap-2.5">
                  {/* Add New Input */}
                  <div className="flex items-center h-12 border border-[#D2D2D2] rounded-lg px-4 sm:px-5">
                    <FontAwesomeIcon 
                      icon={faPlus} 
                      className="text-[#778080] w-[13px] h-[13px]" 
                        onClick={() => {
                            setCustomAllergies([...customAllergies, newAllergy]);
                            setNewAllergy('');
                        }}
                    />
                    <input
                      type="text"
                      placeholder="הוסיפו כאן..."
                      value={newAllergy}
                      onChange={(e) => setNewAllergy(e.target.value)}
                      className="flex-1 mr-4 text-right text-[14px] leading-[22px] text-[#778080] outline-none"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    />
                  </div>
                  {/* Custom Allergies List */}
                  {customAllergies.map((allergy, index) => (
                    <div 
                      key={index}
                      className="flex items-center h-12 border border-[#D2D2D2] rounded-lg px-4 sm:px-5"
                    >
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        className="text-[#FC4B4E] w-[11px] h-[13px] cursor-pointer" 
                        onClick={() => {
                          setCustomAllergies(customAllergies.filter((_, i) => i !== index));
                        }}
                      />
                      <span 
                        className="flex-1 mr-4 text-right text-[14px] leading-[22px] text-[#05172C]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        {allergy}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden sm:block relative w-full max-w-[473px] aspect-[473/478] mx-auto">
            <img 
              src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/allergies.png" 
              alt="Allergies"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Button Container */}
        <div className="flex gap-3 sm:gap-4 mt-6">
          <button 
            onClick={handleSkip}
            className="w-[140px] sm:w-[170px] h-[44px] sm:h-[52px] bg-gray-300 text-black rounded-full font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[29px] shadow-md"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            דלג
          </button>
          <button
            onClick={onNext}
            className="w-[140px] sm:w-[170px] h-[44px] sm:h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[29px] shadow-md"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            לשאלה הבאה
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllergyQuestion;