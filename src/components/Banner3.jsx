import React from 'react'
import styles, { layout } from '../style'
const Banner3 = () => {
  return (
    <section id="card" className={`${layout.section} px-10`}>
    <div className={`${layout.sectionInfo} mr-40 ml-20`}>
              <p className='text-[50px] tracking-widest font-vietnam font-extralight text-secondary'>
              Fashion is just a tool, your <span>Heart</span> and <span>Soul</span> create the rules
        </p>
        <div className={styles.line}></div>
          </div>
    <div className={layout.sectionImg}>
      <img src='assets/banner-4.jpeg' alt='banner1' className="rounded-[5px] max-h-[650px]"/>
    </div>
  </section>
  )
}

export default Banner3