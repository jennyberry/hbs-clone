import { navLinks } from "../constants"
import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
  return (

    <nav className="w-full flex py-6 navbar flex-col relative">
      <div className="flex justify-between items-center pb-5">
        <div>VND</div>
        <Link to="/hbs-clone/"><img src="assets/logo.png" alt="hbs-logo" className="cursor-pointer"/></Link>

      <div className="flex justify-between items-center">
        <img src="assets/search.png" alt="search-icon" className="object-contain w-[24px] h-[24px] mr-2" />
        <img src="assets/user.png" alt="user-icon" className ="object-contain w-[24px] h-[24px] mr-2" />
        <img src="assets/cart.png" alt="cart-icon" />
        </div>
      </div>

      <div className="flex items-center text-center pt-5 justify-center">
      <div className=" absolute ">
      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className={`navItem font-poppins font-normal cursor-pointer text-[20px] text-black ${index === navLinks.length -1 ? "mr-0":"mr-12"}`}>
            {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
            <NavLink
              className={({ isActive }) =>
              isActive ? "navbar__link--active" : undefined}
              to={`/hbs-clone/${nav.link}`}>{nav.title}</NavLink>
          </li>
        ))}
          </ul>
          </div>
      </div>



    </nav>
  )
}

export default Navbar