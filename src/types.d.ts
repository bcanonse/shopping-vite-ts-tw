export interface ChildrenProps {
  children: JSX.Element | JSX.Element[]
}

interface Category {
  name: string
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  images: string[]
  category?: Category
}

export interface Order {
  date: Date
  products: ListOfProducts
  totalProducts: number
  totalPrice: number
}

export type ProductParm = Pick<Product, 'id' | 'title' | 'images' | 'price'>

export type ProductId = Pick<Product, 'id'>

export type ProductShow = Omit<Product, 'id'>

export interface GlobalContent {
  count: number
  setCount: (count: number) => void
  openProductDetail: () => void
  closeProductDetail: () => void
  closeCheckoutSideMenu: () => void
  openCheckoutSideMenu: () => void
  setProductToShow: (product: ProductShow) => void
  isProductDetailOpen: boolean
  isCheckoutSideMenuOpen: boolean
  productToShow: ProductShow
  cartProducts: ListOfProducts
  setCartProducts: (product: Product[]) => void
  order: ListOfOrders
  setOrder: (order: ListOfOrders) => void
  items: ListOfProducts
  setItems: (items: ListOfProducts) => void
  searchByTitle: string
  setSearchByTitle: (value: string) => void
}

interface Route {
  path: string
  element: JSX.Element
}

export type ListOfRoutes = Route[]

export type ListOfProducts = Product[]

export type ListOfOrders = Order[]
