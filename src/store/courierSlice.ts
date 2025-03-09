import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourierDetailsProps } from '../types/courierTypes';
import { RootState } from '../store';

const initialState: CourierDetailsProps = {
  courier: {
    name: 'איציק תשובה',
    phone: '054-8794237',
  },
  shipment: {
    orderNumber: '000001173',
    name: 'ישראל ישראלי',
    street: 'נס-ציונה: המזמרה 4 , 33',
  },
};

const courierSlice = createSlice({
  name: 'courier',
  initialState,
  reducers: {
    updateCourierDetails: (state, action: PayloadAction<CourierDetailsProps>) => {
      return action.payload;
    },
  },
});

export const { updateCourierDetails } = courierSlice.actions;

export const selectCourierDetails = (state: RootState) => state.courier;

export default courierSlice.reducer;