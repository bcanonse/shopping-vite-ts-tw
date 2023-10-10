import { NavLink } from 'react-router-dom'

import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { useGlobalContext } from '../../context'

import { Layout } from '../../components/Layout'
import { OrderCard } from '../../components/OrderCard'

export const MyOrder = (): JSX.Element => {
  const {
    order
  } = useGlobalContext()

  return (
    <Layout>
      <div className='flex w-80 relative justify-center items-center mb-6'>
        <h1>My order</h1>
        <NavLink to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </NavLink>
      </div>
      <div className='flex flex-col w-80'>
        {
          order?.length > 0
            ? order?.slice(-1)[0]?.products.map(product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                images={product.images}
                price={product.price}
              />
            ))
            : <p className='text-2xl font-medium'>No hay productos en la orden</p>
        }
      </div>
    </Layout>
  )
}
