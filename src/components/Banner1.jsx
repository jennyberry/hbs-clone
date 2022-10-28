import React from 'react'
import styles, { layout } from '../style'
const Banner1 = () => {
  return (
    <section id="card" className={`${layout.section} px-10 ml-10`}>
      <div className={`${layout.sectionInfo} mr-40`}>
        <h2 className={`font-vietnam text-[80px]`}>Autumn Winter 2022 Collection</h2>
        <button className="bg-black text-white px-10 py-5 mt-10 font-poppins text-lg rounded-[10px] w-[300px]">SHOP NOW</button>
      </div>
      <div className={layout.sectionImg}>
        <img src='banner-1.jpg' alt='banner1' className="rounded-[5px] max-h-[650px]"/>
      </div>
    </section>
  )
}

export default Banner1
