import { navLinks } from "../constants"
// import { logo, user, search, cart } from "../assets"
// import {logo} from "../assets"

const Navbar = () => {
  return (

    <nav className="w-full flex py-6 navbar flex-col">
      <div className="flex justify-between items-center pb-5">
      <div>VND</div>
      <img src="./logo.png" alt="hbs-logo" />
      <div className="flex justify-between items-center">
        <img src="./search.png" alt="search-icon" className="object-contain w-[24px] h-[24px] mr-2" />
        <img src="./user.png" alt="user-icon" className ="object-contain w-[24px] h-[24px] mr-2" />
        <img src="./cart.png" alt="cart-icon" />
        </div>
        </div>
      <div className="flex justify-between items-center text-left pt-5">
      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] text-black ${index === navLinks.length -1 ? "mr-0":"mr-12"}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>



    </nav>
  )
}

export default Navbar