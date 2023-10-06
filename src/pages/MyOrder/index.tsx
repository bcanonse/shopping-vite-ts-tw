import { useGlobalContext } from '../../context'

import { Layout } from '../../components/Layout'
import { OrderCard } from '../../components/OrderCard'

export const MyOrder = (): JSX.Element => {
  const {
    order
  } = useGlobalContext()

  return (
    <Layout>
      <>My order</>
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
