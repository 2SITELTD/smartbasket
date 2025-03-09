
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addList, updateList, deleteList } from '../../../store/listSlice';
import { ListItem } from './ListItem';
import { AddListForm } from './AddListForm';
import { List } from '../../../types/listsType';

export const UserLists: React.FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.list);

  const handleAddList = (newList: List) => {
    dispatch(addList(newList));
  };

  const handleUpdateList = (updatedList: List) => {
    dispatch(updateList(updatedList));
  };

  const handleDeleteList = (listId: string) => {
    dispatch(deleteList(listId));
  };

  return (
    <div className="flex gap-8 items-center">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch p-10 my-auto w-full bg-white rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full text-2xl font-semibold leading-none text-right text-black max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/b0bea7aebaa50101778523c7d2ff359ceaf9f94bd043a73ae61341f0d2cd0a95?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
            className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2.89] w-[156px]"
            alt="User Lists Logo"
          />
          <div className="flex flex-col self-stretch my-auto w-32">
            <div className="self-end">הרשימות שלי</div>
            <div className="flex mt-3 w-full bg-sky-500 min-h-[3px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full">
          <div className="flex w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          <AddListForm onAddList={handleAddList} />
          {lists.map((list) => (
            <ListItem
              key={list.id}
              list={list}
              onDelete={handleDeleteList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
