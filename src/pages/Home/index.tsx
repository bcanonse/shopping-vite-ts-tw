import { Layout } from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { useGlobalContext } from '../../context'

import { useDebouncedCallback } from 'use-debounce'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const WAIT_BETWEEN_CHANGE = 300

const Home = (): JSX.Element => {
  const {
    setSearchByTitle,
    filteredItems,
    setCategory
  } = useGlobalContext()

  const { pathname } = useLocation()

  const handleChangeSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setSearchByTitle(value)
  }, WAIT_BETWEEN_CHANGE)

  const renderView = (): JSX.Element | JSX.Element[] => {
    return filteredItems?.length > 0
      ? (
          filteredItems?.map(item => (
          <Card key={item.id} product={item} />
          ))
        )
      : (
        <div className='flex justify-center col-span-4 mt-3'>
          <p className='font-medium text-xl'>There are not matches in the search!</p>
        </div>
        )
  }

  const setCategoryState = (): void => {
    const category = pathname.substring(pathname.indexOf('/') + 1, pathname.length) ?? ''
    const categoryUpperCase = category.charAt(0).toUpperCase() + category.slice(1)
    setCategory(categoryUpperCase.length > 0 ? categoryUpperCase : '')
    setSearchByTitle('')
  }

  useEffect(() => {
    setCategoryState()
  }, [pathname])

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
