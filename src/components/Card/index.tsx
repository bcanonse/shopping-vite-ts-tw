import { useGlobalContext } from '../../context'
import { type Product } from '../../types'

import { AddProductButton } from '../AddProductButton'

interface Props {
  product: Product
}

const Card: React.FC<Props> = ({ product }) => {
  const {
    openProductDetail,
    setProductToShow,
    closeCheckoutSideMenu
  } = useGlobalContext()

  const showProduct = (productDetail: Product): void => {
    openProductDetail()

    setProductToShow(productDetail)

    closeCheckoutSideMenu()
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => { showProduct(product) }}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>{product.category?.name}</span>
        <img className="w-full h-full object-cover rounded-lg"
          src={product.images[0]}
          alt={product.title} />
          <AddProductButton product={product} />
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>

    </div>
  )
}

export default Card
