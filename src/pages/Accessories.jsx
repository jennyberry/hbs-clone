import React from 'react'
import { Navbar, Footer, AccessoriesItem } from '../components'
import styles from '../style'
const Accessories = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Navbar/>
      </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.titleHead}`}>
            <h1>ACCESSORIES</h1>
            <div className={`${styles.lineHeading}`}></div>
          </div>
        <AccessoriesItem/>
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

export default Accessories