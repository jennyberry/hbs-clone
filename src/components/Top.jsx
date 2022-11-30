import React from 'react'
import { tops } from '../constants'
import styles, { layout } from '../style'
const Top = () => {
  return (
    <section className='px-16 py-10 flex flex-row'>
          <div className={`grid gap-5 grid-cols-3 grid-rows-${(tops.length/2)}`}>
                  {tops.map((product) => (
                      <div key={product.id} className="text-center font-vietnam">
                          <div className='mb-4'> <img className= {`${styles.prodImg}`} src={product.img} alt='hbs-clothes'/></div>
                            <h4>{product.title}</h4>
                            <p className='font-bold'>{product.price} VND</p>
                     </div>
                 ))}
          </div>

      </section>
  )
}

export default Top