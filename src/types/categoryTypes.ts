export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
} 