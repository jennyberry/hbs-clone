import React from 'react'
import { footerLinks } from '../constants'
import styles from '../style'
const Footer = () => {
  return (
    <section className='w-full py-5 justify-center bg-black font-poppins text-white'>
      <div className='flex flex-row justify-between px-10'>
      <div className='mr-2'>
        <h3 className={styles.heading3}>Newsletter</h3>
          <input type="email"
            placeholder='Your email...'
            className='py-3 px-5 max-w-[80%] max-h-[40px] rounded-[10px] bg-black text-white border-2'></input>
      </div>
      <div>
        <h3 className={styles.heading3}>Find a store</h3>
        <div className='flex flex-row mr-2'>
          <img src='assets/location.png' alt='address' className='w-[30px] h-[30px] object-contain'/>
          <p className='font-light text-[15px] mx-2'>8 Nguyen Hy Quang Street, <br />
            O Cho Dua Ward, Dong Da Dist, Hanoi</p>
        </div>
        </div>
        <div>
          <h3 className={styles.heading3}>Get help</h3>
          <ul className='font-light'>
            {footerLinks.map((footerlink) => (
              <li key={footerlink.id}>
                <a href={`${footerlink.link}`}>{footerlink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-row'>
          <img src='assets/ig.png' className='object-contain mr-5 cursor-pointer'
            alt='instagram'
            onClick={() => window.open("https://www.instagram.com/hbsvnofficial/")} />
          <img src='assets/fb.png' className='object-contain cursor-pointer'
            alt='facebook'
            onClick={() => window.open("https://www.facebook.com/HBSVNOfficial")} />
        </div>
      </div>
      <p className="font-poppins font-light text-left text-[16px] leading-[27px] text-dimWhite ml-10">
        Copyright Ⓒ 2022 HBS. All Rights Reserved.
        </p>
    </section>
  )
}

export default Footer