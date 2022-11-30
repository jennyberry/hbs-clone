import React from 'react'
import { Navbar, Footer, Bottom } from '../components'
import styles from '../style'
const Bottoms = () => {
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
            <h1>ALL BOTTOMS</h1>
            <div className={`${styles.lineHeading}`}></div>
          </div>
        <Bottom/>
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

export default Bottoms