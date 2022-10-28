import React from 'react'
import styles, { layout } from '../style'
const Banner2 = () => {
  return (
    <section id="card" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} mr-40 ml-20`}>
        <img src='/banner-2.jpg' alt='banner2' className=" rounded-[5px] max-h-[650px]"/>
      </div>
      <div className={layout.sectionInfo}>
        <div className={`${styles.line} ml-10`}></div>
        <p
          className="font-vietnam font-extralight tracking-widest text-[50px] w-10 ml-10 text-secondary">
          The journey begins from the <span>Heart</span>
        </p>
      </div>
    </section>
  )
}

export default Banner2