
import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../../lib/utils";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange?: (values: [number, number]) => void;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, onChange }) => {
  const [values, setValues] = React.useState<[number, number]>([min, max]);

  const handleValueChange = (newValues: number[]) => {
    const typedValues: [number, number] = [newValues[0], newValues[1]];
    setValues(typedValues);
    onChange?.(typedValues);
  };

  return (
    <div className="flex flex-col w-full px-4">
      <SliderPrimitive.Root
        defaultValue={values}
        min={min}
        max={max}
        step={1}
        value={values}
        onValueChange={handleValueChange}
        className="relative flex w-full touch-none select-none items-center"
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
          <SliderPrimitive.Range className="absolute h-full bg-[#00BAFF]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-5 w-5 rounded-full border-2 border-[#00BAFF] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        />
        <SliderPrimitive.Thumb
          className="block h-5 w-5 rounded-full border-2 border-[#00BAFF] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        />
      </SliderPrimitive.Root>
      
      <div className="text-base text-right w-full mt-4 text-[#00BAFF] font-semibold">
        מחיר: ₪{values[0]} - ₪{values[1]}
      </div>
    </div>
  );
};
