import { Product } from '../types/productTypes';

export interface PackageItem {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    description: string;
    image: string;
    items: Product[];
    isFavorite: boolean;
    isSale: boolean;
  }
  
  export interface PackageState {
    packages: PackageItem[];
    loading: boolean;
    error: string | null;
  } 