import React from 'react';
import { List } from '../../../types/listsType';

interface ListCardProps {
  list: List;
  onUpdateList: (updatedList: List) => void;
  onDeleteList: (listId: string) => void;
}

export const ListCard: React.FC<ListCardProps> = ({ list, onUpdateList, onDeleteList }) => {
  return (
    <div className="flex flex-col justify-center px-5 py-6 mt-8 w-full bg-white rounded-xl shadow-[0px_2px_12px_rgba(183,189,196,0.504)] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[984px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto text-xl font-semibold text-center text-black w-[168px]">
          <button
            onClick={() => onUpdateList(list)}
            className="px-4 py-3 bg-sky-500 rounded-3xl max-md:px-5"
          >
            שלח לעגלה
          </button>
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
            <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-black">
              <div className="text-2xl font-semibold leading-none">{list.title}</div>
              <div className="mt-2.5 text-sm leading-loose">{list.description}</div>
            </div>
            <div className="flex shrink-0 self-stretch my-auto w-px h-10 bg-neutral-300" />
            <div className="flex flex-col justify-center self-stretch p-0.5 my-auto w-[46px]">
              <div className="flex shrink-0 bg-slate-700 h-[42px] w-[42px]" />
            </div>
          </div>
          <button
            onClick={() => onDeleteList(list.id)}
            className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/434dfc7e1301af3ef8a4a7280d089250763e6f3cfac87c94ded3cfb91278869f?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
              className="object-contain self-stretch my-auto aspect-square w-[13px]"
              alt="Delete list"
            />
          </button>
        </div>
      </div>
    </div>
  );
};