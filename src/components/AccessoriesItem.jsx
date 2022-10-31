import React from 'react'
import { accessories } from '../constants'
const AccessoriesItem = () => {
  return (
    <section className='px-16 py-10 flex flex-row'>
          <div className={`grid gap-5 grid-cols-3 grid-rows-${(accessories.length/2)}`}>
                  {accessories.map((accessory) => (
                      <div key={accessory.id} className="text-center font-vietnam">
                          <div className='mb-4'> <img src={accessory.img} alt='hbs-clothes' className='w-full'/></div>
                            <h4>{accessory.title}</h4>
                            <p className='font-bold'>{accessory.price} VND</p>
                     </div>
                 ))}
          </div>

      </section>
  )
}

export default AccessoriesItem