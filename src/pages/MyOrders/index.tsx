import { NavLink } from 'react-router-dom'

import { Layout } from '../../components/Layout'
import { OrdersCard } from '../../components/OrdersCard'
import { useGlobalContext } from '../../context'

export const MyOrders = (): JSX.Element => {
  const {
    order
  } = useGlobalContext()

  return (
    <Layout>
      <div className='flex w-80 relative justify-center items-center mb-4'>
        <h1 className='font-medium text-xl'>My orders</h1>
      </div>
      <div>
        {
          order?.map((item, index) => (
            <NavLink
              key={index}
              to={`/my-orders/${index}`}
            >
              <OrdersCard
                key={index}
                totalPrice={item.totalPrice}
                totalProducts={item.totalProducts}
                date={item.date}
                products={item.products}
              />
            </NavLink>
          ))
        }
      </div>

    </Layout>
  )
}
