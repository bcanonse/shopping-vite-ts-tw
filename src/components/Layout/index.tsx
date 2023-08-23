import { type ChildrenProps } from '../../types'

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
  )
}
