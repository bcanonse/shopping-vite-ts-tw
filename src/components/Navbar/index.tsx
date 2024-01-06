import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export const Navbar = (): JSX.Element => {
  const { count, categories } = useGlobalContext()

  const renderOptionsCategories = (): JSX.Element[] => {
    return (
      categories?.map(item => (
        <li key={item}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            {item}
          </NavLink>
        </li>
      ))
    )
  }

  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        {renderOptionsCategories()}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          bcanonse@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center text-black'>
          <ShoppingCartIcon className='h-6 w-6' />
          <p>{count}</p>
        </li>
      </ul>
    </nav>
  )
}
