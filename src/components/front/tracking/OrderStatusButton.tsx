
import React from 'react';

interface OrderStatusButtonProps {
  status: string;
  isActive: boolean;
  complete: boolean;
}

export const OrderStatusButton: React.FC<OrderStatusButtonProps> = ({ status, isActive, complete }) => {
  const baseClasses = "px-10 py-4 text-base font-semibold whitespace-nowrap min-h-[52px] rounded-[103px] max-md:min-w-[200px] max-sm:px-5 max-sm:py-3 max-sm:w-full max-sm:min-w-0 max-sm:text-sm";
  const activeClasses = "text-white bg-sky-500";
  const pendingClasses = "text-zinc-900 bg-zinc-100";
  const completedClasses = "text-white bg-[#7EB23D]";

  return (
    <div className="relative flex items-center">
      {/* Status Button */}
      <button
        className={`${baseClasses} ${isActive ? activeClasses : complete ? completedClasses : pendingClasses}`}
        tabIndex={0}
      >
        {status}
      </button>

      {/* Connector extending to the left if completed - Only visible on desktop */}
      {complete && (
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-1/3 h-2 bg-[#7EB23D] hidden md:block"></div>
      )}
    </div>
  );
};
