import React from 'react'
import { Navbar, Footer, CollectionItem } from '../components'
import styles from '../style'
const Collections = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Navbar/>
      </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='text-center font-archivo font-semibold text-[40px] mt-5'>
            <h1>COLLECTIONS</h1>
            <div className={`${styles.lineHeading}`}></div>
          </div>
        <CollectionItem/>
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

export default Collections