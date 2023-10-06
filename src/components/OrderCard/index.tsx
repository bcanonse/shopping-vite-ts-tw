import { XMarkIcon } from '@heroicons/react/24/solid'
import { type ProductId, type ProductParm as ProductType } from '../../types'

interface Props extends ProductType {
  handleDelete?: ({ id }: ProductId) => void
}

export const OrderCard: React.FC<Props> = ({
  id,
  title,
  images,
  price,
  handleDelete
}) => {
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
                { (handleDelete != null) &&
                 <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => { handleDelete({ id }) }}
                />}
            </div>
        </div>
  )
}
