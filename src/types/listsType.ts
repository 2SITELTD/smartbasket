export interface List {
  id: string;
  title: string;
  description: string;
  icon: string;
  products: { productId: string; quantity: number }[];
}
