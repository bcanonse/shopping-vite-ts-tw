import { XMarkIcon } from '@heroicons/react/24/solid'

import { useGlobalContext } from '../../context'

export const CheckoutSideMenu = (): JSX.Element => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useGlobalContext()

  return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px]`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <XMarkIcon className='h-6 w-6 cursor-pointer text-black'
                    onClick={() => { closeCheckoutSideMenu() }} />
            </div>
        </aside>
  )
}
