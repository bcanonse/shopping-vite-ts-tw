import { PlusIcon } from '@heroicons/react/24/solid'

import { useGlobalContext } from '../../context'
import { type Product } from '../../types'

interface Props {
  product: Product
}

const Card: React.FC<Props> = ({ product }) => {
  const {
    setCount,
    count,
    openProductDetail,
    setProductToShow,
    closeCheckoutSideMenu,
    closeProductDetail,
    openCheckoutSideMenu,
    cartProducts,
    setCartProducts
  } = useGlobalContext()

  const incrementCount = (): void => {
    setCount(count + 1)
  }

  const showProduct = (productDetail: Product): void => {
    openProductDetail()

    setProductToShow(productDetail)

    closeCheckoutSideMenu()
  }

  const addProductToCart = (event: React.MouseEvent<HTMLButtonElement>, productAdd: Product): void => {
    event.stopPropagation()
    incrementCount()
    setCartProducts([...cartProducts, productAdd])

    closeProductDetail()
    openCheckoutSideMenu()
  }

  return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => { showProduct(product) }}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>{product.category?.name}</span>
                <img className="w-full h-full object-cover rounded-lg"
                    src={product.images[0]}
                    alt={product.title} />
                <button
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => { addProductToCart(event, product) }}
                >
                    <PlusIcon className='w-6 h-6' />
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.title}</span>
                <span className="text-lg font-medium">${product.price}</span>
            </p>

        </div>
  )
}

export default Card