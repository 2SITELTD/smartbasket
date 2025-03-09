
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTags } from '../../../../store/tagSlice';
import  TagSelector  from '../../../TagSelector';

export const TagSection: React.FC = () => {
  const tags = useSelector(selectTags);
  
  return (
    <div className="flex flex-col mt-3 w-full font-semibold text-center text-slate-900 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="leading-loose text-right max-md:max-w-full">
            תגיות מארז:
          </div>
          <div className="flex mt-2.5 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          <div className="flex flex-wrap gap-2.5 items-start mt-2.5 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="flex overflow-hidden gap-3 justify-center items-center px-3 py-2 w-full h-[40px] rounded-2xl border border-gray-500 border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33ce1466889c97f426e8b2e79443b5ae993a5ddbcc1030a5a51699d2ad622aa?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                  className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.89] stroke-[1.5px] stroke-slate-900"
                  alt=""
                />
                <div className="self-stretch my-auto">
                  הוסף תגית חדשה
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="flex overflow-hidden gap-3 justify-center items-center px-3 py-2 w-full h-[40px] rounded-2xl border border-gray-500 border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/386b61ba02c59e9346e3dff77809c9223c6ca68b749eb5f6cbee8652fc2ce59a?placeholderIfAbsent=true&apiKey=a2912972c87048d393f4667cd84e0030"
                  className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[1.67] fill-slate-900"
                  alt=""
                />
                <div className="self-stretch my-auto">
                  בחר תגית קיימת
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end self-end mt-2.5 text-black">
            {/* <div className="flex gap-2.5 items-center">
              {tags.map((tag, index) => (
                <div
                key={index}
                className="flex flex-col self-stretch my-auto whitespace-nowrap"
              >
                <button
                  className={`px-3 py-2 min-w-[120px] text-center rounded-2xl border border-solid whitespace-nowrap ${
                    selectedTags.includes(tag.name)
                      ? "bg-sky-500 border-sky-500 text-white"
                      : "border-gray-500"
                  }`}
                  onClick={() => handleTagClick(tag.name)}
                >
                  {tag.name}
                </button>
              </div>
              ))}
            </div> */}
            <TagSelector tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};
