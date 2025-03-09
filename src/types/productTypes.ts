
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  isSale: boolean;
  isHot: boolean;
  image: string;
  description: string;
  shortDescription: string;
  productDetails: string;
  categories: string[];
  tags: string[];
  thumbnails: string[];
  sku: string;
  rating?: number; // Added rating as optional
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
