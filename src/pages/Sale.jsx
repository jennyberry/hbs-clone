import React from 'react'
import { Navbar, Footer } from '../components'
import styles from '../style'
const Sale = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Navbar/>
      </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <div className='text-center font-archivo font-semibold text-[40px] mt-5'>
            <h1>ON SALE</h1>
            <div className={`${styles.lineHeading}`}></div>
          </div> */}
          <section className='flex flex-col text-center justify-center items-center my-10'>
          <h1 className='text-[30px] font-normal pt-10'> NO ITEMS ON SALE CURRENTLY</h1>
            <img src='/assets/person-skating.png' className='object-contain py-10' />

          </section>

        {/* <Allitems/> */}
          </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
        <Footer/>
          </div>
      </div>
      </div>
  )
}

export default Sale