import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddress, updateAddress } from '../../../store/userSlice';

import { EditButton } from './EditButton';

export const AddressComponent: React.FC = () => {
  const address = useSelector(selectAddress);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(updateAddress({ address, isEditing: true }));
  };

  return (
    <div className={`flex flex-row-reverse gap-5 justify-between items-center w-full max-md:gap-4 max-sm:flex-col-reverse max-sm:items-end`}>
        <div className="flex flex-col items-end w-auto text-2xl leading-none text-right text-slate-900 max-sm:w-full">
            <div className="mb-2 max-sm:text-xl"> כתובת ראשית</div>
        </div>
        <EditButton />
    </div>
  );
};

