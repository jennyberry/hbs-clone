import React from 'react'
import { newproducts } from '../constants'
const Allitems = () => {
  return (
    <section className='px-16 py-10 flex flex-row'>
          <div className={`grid gap-5 grid-cols-3 grid-rows-${(newproducts.length/2)}`}>
                  {newproducts.map((product) => (
                      <div key={product.id} className="text-center font-vietnam">
                          <div className='mb-4'> <img src={product.img} alt='hbs-clothes' className='w-full'/></div>
                            <h4>{product.title}</h4>
                            <p className='font-bold'>{product.price} VND</p>
                     </div>
                 ))}
          </div>

      </section>
  )
}

export default Allitems