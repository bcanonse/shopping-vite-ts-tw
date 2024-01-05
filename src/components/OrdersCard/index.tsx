import { type Order } from '../../types'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

interface Props extends Order {
}

export const OrdersCard: React.FC<Props> = ({
  date,
  totalPrice,
  totalProducts
}) => {
  return (
    <section className='flex justify-between items-center py-4 px-4 mb-3 border rounded-lg border-black w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>{date.toLocaleDateString()}</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>

        <p className='flex justify-end items-center'>
        <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon
            className='h-6 w-6 cursor cursor-pointer text-black'
          />
        </p>
      </div>
    </section>
  )
}
