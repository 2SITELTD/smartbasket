import React from 'react';

interface CategorySectionProps {
  category: {
    name: string;
    subCategories: string[];
  };
  children?: React.ReactNode;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, children }) => {
  return (
    <div className="flex flex-col justify-center p-5 mt-4 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
      <div className="flex gap-8 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-end w-full max-md:max-w-full">
            <div className="flex gap-5 justify-center items-center px-5 w-12 h-12 bg-white shadow-sm min-h-[48px] rounded-[78px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de000aaa7242546180e49eb23af0aea24229a74062b0354bc5e736fe73b0280?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                className="object-contain self-stretch my-auto w-2.5 aspect-[0.83]"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1 shrink basis-[38px] min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="text-sm leading-loose text-right text-black max-md:max-w-full">
                  קטגוריית אם:
                </div>
                <div className="flex flex-wrap gap-2.5 items-start mt-2.5 w-full max-md:max-w-full">
                  <div className="flex-1 shrink gap-5 self-stretch p-5 text-sm leading-loose text-black rounded-xl border border-solid border-neutral-300 min-h-[48px] min-w-[240px] max-md:max-w-full">
                    {category.name}
                  </div>
                  <div className="flex gap-5 justify-center items-center px-5 w-12 h-12 rounded-xl border border-solid border-neutral-300 min-h-[48px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9425fd2fa82a36dcbe930f00bae6a6dc899c0f882e6d3f63c484342eb48e9771?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                      className="object-contain self-stretch my-auto w-2.5 aspect-square"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};