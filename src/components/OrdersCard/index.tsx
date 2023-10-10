import { type Order } from '../../types'

interface Props extends Order {
}

export const OrdersCard: React.FC<Props> = ({
  date,
  totalPrice,
  totalProducts
}) => {
  return (
        <div className='flex justify-between items-center px-6 mb-3 border border-black'>
            <p>
                <span>{date.toLocaleDateString()}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
  )
}
