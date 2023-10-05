import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { type Product } from '../../types'
import { useGlobalContext } from '../../context'

interface Props {
  product: Product
}

export const AddProductButton: React.FC<Props> = ({ product }) => {
  const {
    setCount,
    count,
    setCartProducts,
    cartProducts,
    closeProductDetail,
    openCheckoutSideMenu
  } = useGlobalContext()

  const incrementCount = (): void => {
    setCount(count + 1)
  }

  const addProductToCart = (event: React.MouseEvent<HTMLButtonElement>, productAdd: Product): void => {
    event.stopPropagation()

    if (isInCart) return

    incrementCount()
    setCartProducts([...cartProducts, productAdd])

    closeProductDetail()
    openCheckoutSideMenu()
  }

  const isInCart = cartProducts?.filter(item => item.id === product.id)?.length > 0
  const backgroundColor = !isInCart ? 'bg-white' : 'bg-green-800'

  return (
        <button
            className={`absolute top-0 right-0 flex justify-center items-center ${backgroundColor} w-6 h-6 rounded-full m-2 p-1`}
            onClick={(event) => { addProductToCart(event, product) }}
        >
            {
                !isInCart
                  ? <PlusIcon className='w-6 h-6' />
                  : <CheckIcon className='w-6 h-6 text-white' />
            }
        </button>
  )
}
