import React, { useState } from 'react';

interface PreferencesQuestionnaireProps {
  onNext: () => void;
}

const PreferencesQuestionnaire: React.FC<PreferencesQuestionnaireProps> = ({ onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "האם יש לך העדפות או הגבלות תזונתיות?",
      options: [
        "רגישות לגלוטן",
        "צמחוני",
        "טבעוני",
        "רגישות לבוטנים",
        "רגישות לדגים",
        "אלרגיה ורגישות לעופות",
      ],
    },
    {
      question: "האם יש לך העדפות נוספות?",
      options: [
        "העדפות נוספות 1",
        "העדפות נוספות 2",
        "העדפות נוספות 3",
      ],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext(); // Call the onNext function when the last question is reached
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-[975px] py-16 bg-white shadow-md rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center">
          <h1 
            className="text-[52px] leading-[70px] text-[#05172C] font-semibold text-center"
            style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
          >
            {questions[currentQuestion].question}
          </h1>
        </div>

        {/* Options Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 w-full">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="border border-gray-300 rounded-full px-4 py-2 text-lg text-gray-700 hover:bg-gray-200">
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-8">
          {currentQuestion > 0 && (
            <button 
              onClick={handlePrevious}
              className="w-[100px] h-[40px] bg-gray-300 text-black rounded-full font-semibold text-[16px] leading-[29px] shadow-md"
            >
              הקודם
            </button>
          )}
          <button 
            onClick={handleNext}
            className="w-[100px] h-[40px] bg-[#00BAFF] text-white rounded-full font-semibold text-[16px] leading-[29px] shadow-md"
          >
            {currentQuestion < questions.length - 1 ? "הבא" : "סיים"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesQuestionnaire; 