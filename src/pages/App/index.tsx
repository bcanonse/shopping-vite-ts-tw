import { BrowserRouter, useRoutes } from 'react-router-dom'

import { ShoppingCartProvider } from '../../context'
import Home from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { Navbar } from '../../components/Navbar'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
import { type ListOfRoutes } from '../../types'

const AppRoutes = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null => {
  const routes: ListOfRoutes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ]

  return useRoutes(routes)
}

const App = (): JSX.Element => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
