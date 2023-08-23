import { useState, useEffect } from 'react'

import { Layout } from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { type ListOfProducts } from '../../types'

const Home = (): JSX.Element => {
  const [items, setItems] = useState<ListOfProducts>([])

  const getProducts = async (): Promise<void> => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')

      const data = await response.json()

      setItems(data)
    } catch (error) {
      setItems([])
    }
  }

  useEffect(() => {
    void getProducts()
  }, [])

  return (
        <Layout>
            <>
                Home
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        items?.map(item => (
                            <Card key={item.id} product={item} />
                        ))
                    }
                </div>
                <ProductDetail />
            </>
        </Layout>
  )
}

export default Home
