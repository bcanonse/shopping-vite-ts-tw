import { type ListOfProducts } from '../types'

/**
 * This function calculates total price of a new order
 * @param {ListOfProducts} products cart products
 * @returns {number} total cart products
 */
export const totalPrice = (
  products: ListOfProducts
): number => products.reduce((sum, product) => sum + product.price, 0)

/**
 * This function calculates total price of a new order
 * @param {ListOfProducts} products cart products
 * @returns {string} total currency
 */
export const totalPriceWithFormat = (
  products: ListOfProducts,
  currency: string = 'USD'
): string => {
  const total = products.reduce((sum, product) => sum + product.price, 0)

  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency
  })

  return formatter.format(total)
}
