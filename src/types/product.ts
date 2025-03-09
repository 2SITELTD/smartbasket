export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  isFavorite?: boolean;
  isSale?: boolean;
  originalPrice?: number;
  reviews?: number;
  stock?: number;
  sku?: string;
  rating?: number;
  isHot?: boolean;
}

export interface Package {
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

export interface ProductState {
  products: Product[];
  packages: Package[];
  favorites: UserFavorite[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface UserFavorite {
  userId: string;
  productId: string;
}