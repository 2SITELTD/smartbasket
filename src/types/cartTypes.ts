import { Product } from './productTypes';

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  quantity: number;
  isGroup?: boolean;
}

export interface CartSummaryProps {
  totalItems: number;
  totalSavings: number;
  totalAmount: number;
}

export interface ActionButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export interface CartState {
  items: CartItemProps[];
  totalPrice: number,
  totalOriginalPrice: number,
  totalSaving: number,
  totalItems:number

}