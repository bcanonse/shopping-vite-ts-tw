import { XMarkIcon } from '@heroicons/react/24/solid'

import { useGlobalContext } from '../../context'
import { OrderCard } from '../OrderCard'
import { type Order, type ProductId } from '../../types'
import { totalPrice, totalPriceWithFormat } from '../../utils'

export const CheckoutSideMenu = (): JSX.Element => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setOrder,
    order,
    setCount,
    count
  } = useGlobalContext()

  const handleDelete = ({ id }: ProductId): void => {
    const filteredProducts = cartProducts?.filter(item => item.id !== id)
    setCartProducts(filteredProducts)
    setCount(count - 1)
  }

  const handleCheckout = (): void => {
    if (cartProducts.length === 0) return

    const orderToAdd: Order = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount(0)
  }

  return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px]`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <XMarkIcon className='h-6 w-6 cursor-pointer text-black'
                    onClick={() => { closeCheckoutSideMenu() }} />
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
                {
                    cartProducts?.map(cart => (
                        <OrderCard
                            key={cart.id}
                            id={cart.id}
                            title={cart.title}
                            images={cart.images}
                            price={cart.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-medium text-2xl'>Total:</span>
                    <span className='font-medium text-2xl'>{totalPriceWithFormat(cartProducts)}</span>
                </p>
                <button
                    className='bg-black py-3 text-white w-full rounded-lg'
                    onClick={() => { handleCheckout() }}
                >Checkout</button>
            </div>

        </aside>
  )
}
