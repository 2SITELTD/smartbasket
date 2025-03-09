import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PaymentState {
  couponCode: string;
  paymentMethod: string;
  cardNumber: string;
}

const initialState: PaymentState = {
  couponCode: 'NEWYEAR15',
  paymentMethod: 'Apple Pay',
  cardNumber: 'XXXX-XXXX-XXXX-1114',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCouponCode: (state, action: PayloadAction<string>) => {
      state.couponCode = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      state.cardNumber = action.payload;
    },
  },
});

export const { setCouponCode, setPaymentMethod, setCardNumber } = paymentSlice.actions;

export const selectPaymentInfo = (state: RootState) => state.payment;

export default paymentSlice.reducer;