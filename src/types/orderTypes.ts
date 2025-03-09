
export type OrderStatus = "ממתין לשליח" | "השליח בדרך" | "הזמנה מוכנה" | "הזמנה אושרה" | "הזמנה נוצרה" | "הזמנה הושלמה";

export interface Order {
    id: string;
    date: string;
    products: { productId: string; quantity: number }[];
    total: number;
    status: OrderStatus;
}

export interface OrderState {
    orders: Order[];
}

