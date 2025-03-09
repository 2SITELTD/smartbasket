import { CartItemProps } from "../types/cartTypes"

export const calculateTotals = (items: CartItemProps[]) => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

    const totalOriginalPrice = items.reduce((acc, item) => {
      return acc + ((item.originalPrice * item.quantity) || (item.price * item.quantity))
    }, 0)

    const totalItems = items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)

    return {
        totalPrice,
        totalOriginalPrice,
        totalSaving: totalOriginalPrice - totalPrice,
        totalItems
    }
}