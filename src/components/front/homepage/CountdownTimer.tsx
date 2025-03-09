import React from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeBox: React.FC<TimeUnit> = ({ value, label }) => (
  <div className="w-[54px] h-[54px] bg-white shadow-md rounded flex flex-col items-center justify-center">
    <span 
      className="text-[18px] font-bold text-[#264653] leading-[23px] font-['PT_Sans']"
    >
      {value.toString().padStart(2, '0')}
    </span>
    <div className="w-[13px] h-[2px] bg-[#7EB23D] my-1" />
    <span 
      className="text-xs text-[#6A737C] font-['PT_Sans']"
    >
      {label}
    </span>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-4">
      <TimeBox value={days} label="day" />
      <TimeBox value={hours} label="hour" />
      <TimeBox value={minutes} label="min" />
      <TimeBox value={seconds} label="sec" />
    </div>
  );
};

export default CountdownTimer;
