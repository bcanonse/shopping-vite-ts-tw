import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  type GlobalContent,
  type ChildrenProps,
  type ProductShow,
  type Product,
  type ListOfOrders,
  type ListOfProducts
} from '../types'

const ShoppingCartContext = createContext<GlobalContent>({
  count: 0,
  setCount: () => { },
  openProductDetail: () => { },
  closeProductDetail: () => { },
  closeCheckoutSideMenu: () => { },
  isProductDetailOpen: false,
  isCheckoutSideMenuOpen: false,
  productToShow: {
    title: '',
    price: 0,
    description: '',
    images: []
  },
  setProductToShow: () => { },
  cartProducts: [{
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: []
  }],
  openCheckoutSideMenu: () => { },
  setCartProducts: () => { },
  order: [{
    date: new Date(),
    totalPrice: 0,
    totalProducts: 0,
    products: [{
      id: 0,
      title: '',
      price: 0,
      description: '',
      images: []
    }]
  }],
  setOrder: () => { },
  items: [
    {
      id: 0,
      title: '',
      price: 0,
      description: '',
      images: []
    }
  ],
  setItems: () => { },
  searchByTitle: '',
  setSearchByTitle: () => { },
  filteredItems: [
    {
      id: 0,
      title: '',
      price: 0,
      description: '',
      images: []
    }
  ],
  categories: [],
  setCategory: () => { }
})

export const useGlobalContext = (): GlobalContent => useContext(ShoppingCartContext)

export const ShoppingCartProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [count, setCount] = useState(0)

  // Product detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = (): void => { setIsProductDetailOpen(true) }
  const closeProductDetail = (): void => { setIsProductDetailOpen(false) }

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = (): void => { setCheckoutSideMenuOpen(true) }
  const closeCheckoutSideMenu = (): void => { setCheckoutSideMenuOpen(false) }

  // Product detail - Show product
  const [productToShow, setProductToShow] = useState<ProductShow>({
    title: '',
    price: 0,
    description: '',
    images: []
  })

  // Shopping cart - Add products to cart
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  // Shopping cart - Add products to cart
  const [order, setOrder] = useState<ListOfOrders>([])

  // Get products
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

  // Search items
  const [searchByTitle, setSearchByTitle] = useState('')

  // Get filtered products
  const [filteredItems, setFilteredItems] = useState<ListOfProducts>([])

  const filteredItemsByTitle = (
    items: ListOfProducts,
    searchByTitle: string
  ): ListOfProducts => {
    return items?.filter(product =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  // Get category filter in navbar
  const [category, setCategory] = useState('')

  // Get items by category
  const filteredItemsByCategory = (category: string): ListOfProducts => {
    if (category?.length === 0) return items
    return items?.filter(item => item.category?.name === category)
  }

  useEffect(() => {
    const itemsByCategory = filteredItemsByCategory(category)
    if (searchByTitle?.length > 0) {
      setFilteredItems(filteredItemsByTitle(itemsByCategory, searchByTitle))
    } else {
      setFilteredItems(itemsByCategory?.length > 0 ? itemsByCategory : items)
    }
  }, [items, searchByTitle, category])

  // Get categories from products
  const categoriesSet = new Set(items.map(product => product.category?.name ?? ''))

  const categories = Array.from(categoriesSet)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      categories,
      setCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
