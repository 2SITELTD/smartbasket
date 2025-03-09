import React from 'react';

interface PackageDetailsProps {
  sku: string;
  inventory: number;
  packageName: string;
  smartBasketPrice: number | string;
  purchasePrice: number | string;
  marketPrice: number | string;
  tags: string[];
  displayLocations: string[];
}

export const PackageDetails: React.FC<PackageDetailsProps> = ({
  sku,
  inventory,
  packageName,
  smartBasketPrice,
  purchasePrice,
  marketPrice,
  tags,
  displayLocations,
}) => {
  return (
    <div className="flex flex-col mt-4 w-full max-md:max-w-full">
      <div className="flex mt-4 w-full bg-sky-500 min-h-[3px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-4 justify-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink p-5 text-sm bg-white rounded-xl shadow-sm basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex gap-4 items-start w-full leading-loose max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-4 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
              <DetailField label={"מק\"ט:"} value={sku} />
              <DetailField label="כמות מלאי:" value={inventory.toString()} />
              <DetailField label="שם מארז:" value={packageName} />
            </div>
          </div>
          <div className="flex gap-4 items-start mt-3 w-full leading-loose max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-4 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
              <DetailField
                label="מחיר SmartBasket:"
                value={smartBasketPrice}
                description="זה המחיר שיופיע באדום."
              />
              <DetailField
                label="מחיר רכישה:"
                value={purchasePrice}
                description="מחיר מבצע מהספק."
              />
              <DetailField
                label="מחיר שוק:"
                value={marketPrice}
                description="במבצע? סמן בקופסא."
              />
            </div>
          </div>
          <TagSection tags={tags} />
          <DisplayLocationsSection locations={displayLocations} />
        </div>
        <PackageImage />
      </div>
    </div>
  );
};

interface DetailFieldProps {
  label: string;
  value: string | number;
  description?: string;
}

const DetailField: React.FC<DetailFieldProps> = ({ label, value, description }) => (
  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
    <div className="flex flex-col w-full">
      <div className="text-right text-black">{label}</div>
      {description && <div className="mt-2.5 text-right text-black">{description}</div>}
      <div className="flex justify-between items-center p-5 mt-2.5 w-full text-black rounded-xl border border-solid border-neutral-300 min-h-[48px]">
        <div className="flex-1 shrink gap-3 self-stretch my-auto w-full">
          {value}
        </div>
      </div>
    </div>
  </div>
);

interface TagSectionProps {
  tags: string[];
}

const TagSection: React.FC<TagSectionProps> = ({ tags }) => (
  <div className="flex flex-col mt-3 w-full font-semibold text-center text-black max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="leading-loose text-right max-md:max-w-full">
          תגיות מארז:
        </div>
        <div className="flex mt-2.5 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex gap-2.5 items-start mt-2.5 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-3 justify-center items-center px-3 py-2 w-full rounded-2xl border border-gray-500 border-solid max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6959ac12a5619383b78aaac9b27d1717221913a96feaaa7ced77eb9ffab2b5?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.83] fill-slate-900 w-[11px]"
                alt=""
              />
              <div className="self-stretch my-auto">
                בחר תגית קיימת
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end self-end mt-2.5 text-black">
          <div className="flex gap-2.5 items-center">
            {tags.map((tag, index) => (
              <div key={index} className="flex flex-col self-stretch my-auto">
                <div className="overflow-hidden gap-2.5 self-stretch px-3 py-2 w-full bg-sky-500 rounded-2xl border border-sky-500 border-solid">
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface DisplayLocationsSectionProps {
  locations: string[];
}

const DisplayLocationsSection: React.FC<DisplayLocationsSectionProps> = ({ locations }) => (
  <div className="flex flex-col mt-3 w-full max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="leading-loose text-right text-black max-md:max-w-full">
        הצג מוצר ב:
      </div>
      <div className="flex mt-2.5 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col items-end self-end mt-2.5 font-semibold text-center text-black max-md:max-w-full">
        <div className="flex gap-2.5 items-center max-md:max-w-full">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col self-stretch my-auto">
              <div className={`overflow-hidden gap-2.5 self-stretch px-3 py-2 w-full rounded-2xl border border-solid ${location === 'הצג בדף ראשי' || location === 'מוצרים חמים' ? 'bg-sky-500 border-sky-500' : 'border-gray-500'}`}>
                {location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PackageImage: React.FC = () => (
  <div className="flex relative flex-col items-start py-5 whitespace-nowrap bg-white rounded-xl shadow-sm min-w-[240px] w-[312px]">
    <div className="flex absolute right-0 top-5 z-0 flex-col py-1 text-sm text-right text-black rounded-none h-[25px] w-[55px]">
      <div className="flex shrink-0 bg-amber-300 shadow-sm h-[31px] rounded-[71.392px_0px_0px_71.392px]" />
      <div className="z-10 mt-1 mb-0 max-md:mx-2.5 max-md:mb-2.5">
        מבצע!
      </div>
    </div>
    <div className="flex absolute top-5 left-5 z-0 flex-col text-xs font-black text-black w-[46px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3300795360ebd7651aece7854e211286077fb921548e1e5b820c74b0bb7de617?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
        className="object-contain w-full aspect-[0.98]"
        alt=""
      />
      <div className="flex flex-col mt-6 w-full">
        <div className="px-1.5 w-full bg-white rounded-full h-[47px] shadow-[0px_2px_13px_rgba(183,189,196,0.571)]">
          Trash
        </div>
      </div>
    </div>
  </div>
);
