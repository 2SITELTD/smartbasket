
import React from 'react';

interface LogoutButtonProps {
  onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <div className="flex flex-col justify-center py-px text-xl text-center text-white whitespace-nowrap cursor-pointer w-[134px] max-sm:w-full">
      <button
        onClick={onLogout}
        className="px-3.5 py-3 bg-sky-500 rounded-3xl duration-[0.2s] ease-[ease] transition-[background-color] hover:bg-sky-600 max-sm:w-full"
      >
        התנתק
      </button>
    </div>
  );
};
