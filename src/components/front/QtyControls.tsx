
import React from 'react';
import { Button } from '../../components/ui/button';
import { Plus, Minus } from 'lucide-react';

interface QtyControlsProps {
  id: string;
  quantity: number;
  size?: 'small' | 'medium' | 'large';
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}

export const QtyControls: React.FC<QtyControlsProps> = ({
  id,
  quantity,
  size = 'medium',
  onIncrease,
  onDecrease
}) => {
  // Define size configurations
  const sizeConfig = {
    small: {
      container: 'w-[90px] h-[28px] gap-1 px-1 py-1',
      button: 'w-[24px] h-[24px]',
      plusButton: 'w-[40px] h-[40px] right-[-8px] top-[-6px]',
      icon: 'h-[8px] w-[8px]',
      text: 'text-xs',
    },
    medium: {
      container: 'w-[145px] h-[40px] gap-3 px-3 py-2 max-sm:w-[105px] max-sm:h-[32px] max-sm:gap-2 max-sm:px-2 max-sm:py-1',
      button: 'w-[40px] h-[40px] max-sm:w-[28px] max-sm:h-[28px]',
      plusButton: 'w-[70px] h-[70px] right-[-15px] top-[-15px] max-sm:w-[50px] max-sm:h-[50px] max-sm:right-[-12px] max-sm:top-[-10px]',
      icon: 'h-[13px] w-[13px] max-sm:h-[10px] max-sm:w-[10px]',
      text: 'text-base max-sm:text-sm',
    },
    large: {
      container: 'w-[185px] h-[48px] gap-4 px-4 py-3 max-sm:w-[145px] max-sm:h-[40px] max-sm:gap-3 max-sm:px-3 max-sm:py-2',
      button: 'w-[52px] h-[52px] max-sm:w-[40px] max-sm:h-[40px]',
      plusButton: 'w-[90px] h-[90px] right-[-18px] top-[-18px] max-sm:w-[70px] max-sm:h-[70px] max-sm:right-[-15px] max-sm:top-[-15px]',
      icon: 'h-[16px] w-[16px] max-sm:h-[13px] max-sm:w-[13px]',
      text: 'text-lg max-sm:text-base',
    },
  };

  const styles = sizeConfig[size];

  return (
    <div className={`relative flex items-center bg-[#f4f5f5] rounded-full ${styles.container}`}>
      <Button
        onClick={() => onDecrease(id)}
        className={`${styles.button} rounded-full p-0 hover:bg-white`}
      >
        <Minus className={`${styles.icon} text-[#05172C]`} />
      </Button>

      <span
        className={`text-[#05172C] text-center font-semibold ${styles.text}`}
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        {quantity}
      </span>

      <Button
        onClick={() => onIncrease(id)}
        className={`absolute bg-white shadow-lg hover:bg-white rounded-full ${styles.plusButton}`}
      >
        <Plus className="w-full h-full text-[#05172C]" />
      </Button>
    </div>
  );
};
