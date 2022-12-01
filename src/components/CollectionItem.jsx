import React from 'react'
import { collections } from '../constants'
 const CollectionItem = () => {
  return (
    <section className='px-16 py-10 flex flex-row'>
          <div className={`grid gap-5 grid-cols-2 grid-rows-${(collections.length/2)}`}>
                  {collections.map((collection) => (
                    <div key={collection.id} className="text-center font-vietnam mt-5">

                      <div className='mb-4 '>
                          <img src={collection.img} alt='hbs-clothes'
                            className='w-full h-[550px] object-contain' /></div>
                            <h4>{collection.title}</h4>
                            <p className='font-bold'>{collection.year}</p>
                     </div>


                 ))}
          </div>

      </section>
  )
}
export default CollectionItem