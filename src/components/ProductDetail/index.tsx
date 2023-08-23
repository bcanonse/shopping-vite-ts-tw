import { XMarkIcon } from '@heroicons/react/24/solid'

import { useGlobalContext } from '../../context'

const ProductDetail = (): JSX.Element => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useGlobalContext()

  return (
        <aside
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px]`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon className='h-6 w-6 cursor-pointer text-black'
                    onClick={() => { closeProductDetail() }} />
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                    src={productToShow.images?.[0]}
                    alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>$ {productToShow.price?.toFixed(2)}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
  )
}

export default ProductDetail
