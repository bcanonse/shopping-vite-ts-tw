import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export const Navbar = (): JSX.Element => {
  const { count } = useGlobalContext()

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
                    <NavLink to='/' className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                        others
                    </NavLink>
                </li>
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
                <li className='hover:underline cursor-pointer'>
                    <div className='relative'>
                        <ShoppingCartIcon className='h-6 w-6' />
                        <div className="absolute text-[10px] text-sm -top-[2px] -right-[5px] bg-blue-500 w-[14px] h-[14px] rounded-full text-white">
                            <p className="flex items-center justify-center -mt-[1px] mb-1">{count}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
  )
}
