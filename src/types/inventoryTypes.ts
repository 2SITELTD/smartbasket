import { Product } from "./productTypes";

export interface InventoryItem {
    id: string;
    quantity: number;
    isOutOfStock?: boolean;
    isPackage: boolean;
}

export interface  InventoryState {
    items: InventoryItem[]
}