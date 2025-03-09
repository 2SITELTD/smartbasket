
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { updateUserInfo } from '../../../store/userSlice';

export const PersonalDetails: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
        dispatch(updateUserInfo({ [name]: value }));

  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
      <div className="flex flex-col gap-2">
        <label 
          className="text-[14px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          שם פרטי:
        </label>
        <input
          type="text"
          name="firstName"
          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
          value={user.userInfo.firstName || ''}
          onChange={(handleChange)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label 
          className="text-[14px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          שם משפחה:
        </label>
        <input
          type="text"
          name="lastName"
          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
          value={user.userInfo.lastName || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label 
          className="text-[14px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          מספר טלפון:
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
          value={user.userInfo.phone || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label 
          className="text-[14px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          כתובת אימייל:
        </label>
        <input
          type="email"
          name="email"
          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
