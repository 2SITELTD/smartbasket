import React from 'react';
import { useDispatch } from 'react-redux';
import { updateAddress } from '../../../store/userSlice';

export const EditButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(updateAddress({ isEditing: true }));
  };

  return (
    <div className="flex flex-col justify-center self-stretch py-px my-auto text-xl text-center text-white whitespace-nowrap w-[168px]">
      <button
        onClick={handleEdit}
        className="px-4 py-3 bg-sky-500 rounded-3xl max-md:px-5"
      >
        ערוך
      </button>
    </div>
  );
};

