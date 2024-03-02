import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Comp3 from './comp'



function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className='    bg-gray-200
'>

        <div className='flex flex-col sm:flex-row justify-between items-center bg-black text-white h-12 m-2'>
          <div className='sm:order-2'>
            <p className='py-2 text-2xl font-semibold'>Shopping Cart</p>
          </div>
          <div className='sm:order-1 mt-2 sm:mt-0 flex-1 sm:max-w-md lg:max-w-lg'>
            <input className='px-2 py-1  rounded' type="text" placeholder='Search what you wish . . .' />
          </div>
        </div>

        <div className='flex justify-center gap-4 mt-8'>
          <button className='boder-black border-2 px-8 rounded mt-2 mb-2 py-2 bg-gray-300'>All</button>
          <button className='boder-black border-2 px-8 rounded mt-2 mb-2 py-2 bg-gray-300'>Women</button>
          <button className='boder-black border-2 px-8 rounded mt-2 mb-2 py-2 bg-gray-300'>Men</button>
        </div>
        <div className=' '>

          <div className='flex flex-wrap justify-center gap-4 py-8'>

            <Comp3 title='Wrap Around'
              imglink="https://m.media-amazon.com/images/I/814YnuQisPL._AC_SX569_.jpg"
              price='PKR 1400'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://add-to-cart-javascript.vercel.app/img/men-3.jpg"
              price='PKR 1550/-'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://m.media-amazon.com/images/I/91aX3fNcXFL._AC_UL480_FMwebp_QL65_.jpg"
              price='PKR 1700/-'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://add-to-cart-javascript.vercel.app/img/men-2.jpg"
              price='PKR 2100/-'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://add-to-cart-javascript.vercel.app/img/men-1.jpg"
              price='PKR 2000/-'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://m.media-amazon.com/images/I/71G3wuFkcqL._AC_SX569_.jpg"
              price='PKR 1200/-'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://m.media-amazon.com/images/I/71zwwaD9fEL._AC_UL480_FMwebp_QL65_.jpg"
              price='PKR 2300/-'
              city='Karachi'

            />
            <Comp3 title='Wrap Around'
              imglink="https://m.media-amazon.com/images/I/81WjD4sKeSL._AC_SY550_.jpg"
              price='PKR 1750/-'
              city='Karachi'

            />

          </div>
          <div className='flex justify-center mt-6 '>
            <button className='boder-black border-2 px-8 rounded mt-2 mb-2 py-2 bg-blue-400'>Next</button>

          </div>


        </div>
      </div>

    </>
  )
}

export default App
