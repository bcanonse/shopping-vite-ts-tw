import { XMarkIcon } from '@heroicons/react/24/solid'
import { type Product } from '../../types'

type ProductParm = Pick<Product, 'title' | 'images' | 'price'>

export const OrderCard: React.FC<ProductParm> = ({ title, images, price }: ProductParm) => {
  return (
        <div className='flex justify-between items-center px-6 mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full object-cover rounded-lg'
                        src={images?.[0]}
                        alt={title}
                    />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price.toFixed(2)}</p>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                />
            </div>
        </div>
  )
}
