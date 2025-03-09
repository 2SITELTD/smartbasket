
import React from 'react';

interface Field {
  key: string;
  label: string;
}

interface InfoCardProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  iconSrc: string;
  fields: Field[];
  orderNumber?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, data, iconSrc, fields, orderNumber }) => {
  return (
    <div className="flex flex-col flex-1 shrink p-5 bg-white rounded-xl shadow-sm basis-0 min-w-[240px] max-md:w-full">
      <div className="flex gap-10 justify-between text-lg items-center w-full max-md:gap-5 max-md:flex-wrap">
        {orderNumber && (
          <div className="flex gap-5 items-center self-stretch my-auto max-md:w-full max-md:order-2">
            <div className="flex gap-3 items-center self-stretch my-auto max-md:w-full">
              <div className="overflow-hidden self-stretch my-auto text-lg leading-none text-right whitespace-nowrap text-slate-500 w-[92px]">
                {orderNumber}
              </div>
              <div className="flex gap-2.5 self-stretch py-px w-px h-full">
                <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[11px]" />
              </div>
              <div className="self-stretch my-auto text-lg font-semibold leading-none text-slate-900">
                מס' הזמנה
              </div>
            </div>
          </div>
        )}
        <div className="self-end text-lg font-semibold leading-none text-right text-slate-900">
          {title}
        </div>
      </div>
      <div className="flex mt-3 w-full bg-neutral-300 min-h-[1px]" />
      <div className="flex gap-10 justify-between items-start mt-3 w-full max-md:flex-wrap max-md:gap-5">
        <div className="flex gap-2.5 justify-center items-center self-start px-2.5 my-auto shadow-xl bg-white h-[52px] min-h-[52px] rounded-[103px] w-[52px] max-md:order-2">
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain self-stretch my-auto aspect-square w-[13px]"
          />
        </div>
        <div className="flex flex-col items-end self-stretch my-auto min-w-0 flex-1 max-md:w-full">
          {fields.map((field) => (
            <div key={field.key} className="flex gap-4 items-start mt-3 first:mt-0 w-full">
              <div className="flex gap-5 items-center w-full">
                <div className="flex gap-3 items-center self-stretch my-auto w-full">
                  <div className="overflow-hidden self-stretch my-auto text-lg leading-none text-right text-slate-900 flex-1 break-words">
                    {data[field.key]}
                  </div>
                  <div className="flex gap-2.5 self-stretch py-px w-px h-full">
                    <div className="flex flex-1 shrink w-full basis-0 bg-neutral-300 min-h-[11px]" />
                  </div>
                  <div className="self-stretch my-auto text-lg font-semibold leading-none whitespace-nowrap text-slate-900 w-[120px]">
                    {field.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
