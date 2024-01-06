import { Layout } from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { useGlobalContext } from '../../context'

const Home = (): JSX.Element => {
  const {
    items,
    setSearchByTitle,
    searchByTitle,
    filteredItems
  } = useGlobalContext()

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setSearchByTitle(value)
  }

  const renderView = (): JSX.Element | JSX.Element[] => {
    const itemsRendered = searchByTitle?.length > 0
      ? filteredItems
      : items

    return itemsRendered?.length > 0
      ? (
          itemsRendered?.map(item => (
          <Card key={item.id} product={item} />
          ))
        )
      : (
        <div className='flex justify-center col-span-4 mt-3'>
          <p className='font-medium text-xl'>There are not matches in the search!</p>
        </div>
        )
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
            renderView()
          }
        </div>
        <ProductDetail />
      </>
    </Layout>
  )
}

export default Home
