import { Order } from "../types/orderTypes";

export const orders: Order[] = [
    {
      id: '1',
      products: [
        { productId: '1',  quantity: 2 }, 
        { productId: '2', quantity: 1 }
      ],
      status: 'הזמנה הושלמה',
      date: '5/1/2025',
      total: 158.2
    },
    {
      id: '2',
      products: [
        { productId: '3',  quantity: 2 }, 
        { productId: '4', quantity: 1 },
        { productId: '5', quantity: 3 },
        { productId: '20', quantity: 4 },
      ],
      status: 'השליח בדרך',
      date: '18/1/2025',
      total: 276.45
    }
]
  