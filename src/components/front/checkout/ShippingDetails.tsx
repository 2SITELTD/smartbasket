
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { updateShippingDetails } from '../../../store/userSlice';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../ui/select';

export const ShippingDetails: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target; 
    console.log( value)
    dispatch(updateShippingDetails({ [name]: value }));
    
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
      <div className="flex flex-col gap-2">
        <label 
          className="text-[14px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          עיר מגורים:
        </label>
        <Select
          name="city"
          value={user.shippingDetails.city || ''}
          onValueChange={(value) => handleChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="בחר עיר" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tel-aviv">תל אביב</SelectItem>
            <SelectItem value="jerusalem">ירושלים</SelectItem>
            <SelectItem value="haifa">חיפה</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <label 
          className="text-[14px] text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          כתובת:
        </label>
        <input
          type="text"
          name='street'
          className="w-full h-12 px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
