import React, { createContext, useContext, useState } from 'react'
import { type GlobalContent, type ChildrenProps, type ProductShow, type Product, type ListOfOrders } from '../types'

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
    products: []
  }],
  setOrder: () => { }
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
      setOrder
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
