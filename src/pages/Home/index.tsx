import { Layout } from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { useGlobalContext } from '../../context'

const Home = (): JSX.Element => {
  const { items, setSearchByTitle } = useGlobalContext()

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target

    if (value.length === 0) return

    console.log('Valor')
    setSearchByTitle(value)
  }

  return (
    <Layout>
      <>
        <h1 className='text-2xl font-medium mb-4'>Exclusive products</h1>
        <input
          className='rounded-lg border border-black p-4 mb-4 w-80 focus:outline-none'
          type='text'
          placeholder='Search a product'
          onChange={(event) => { handleChangeSearch(event) }}
        />
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
