import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "/logo.svg"
import arrowRight from "/arrowRight.svg"




const harburgermenu = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731299161/hamburger_hod9qo.png"
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  };


    

  return (


    <div className='w-full fixed   top-0 inset-0 z-50 bg-white shadow justify-between items-center h-[82px]  py-[19px]'>
      <div className='flex  md:px-[80px] px-[20px]'>

        {/* <div className=' bg-red-400 w-full h-[44px] items-center justify-between  flex '> */}

        <div className=" w-full items-center flex justify-between">
          <div className=' md:mr-[50px] lg:mr-[77px] '>

            <Link to="/"> <img className='sm:min-w-[100px]  items-center place-content-center sm:h-[20px] md:w-[140px] lg:h-[33px]' src={logo} alt="alventlogo" /></Link>
          </div>

       

          <div className='  items-center justify-between text-center md:w-full md:flex'>

            <ol className='hidden font-Roboto text-nowrap items-center md:flex "   h-[32px] sm:gap-2 md:gap-2   lg:gap-[1.3vw] '>
              <li className='hover:border-b-2 hover:border-customSkyblue' > <Link to="/">Explore events</Link></li>
              <li className=' hover:border-b-2 hover:border-customSkyblue '><Link to="/">My Ticket</Link></li>
              <li className='hover:border-b-2 hover:border-customSkyblue '><Link to="/">About</Link></li>

            </ol>


            
            <div className=' flex  gap-[12px] items-center'>

<ol className='md:flex hidden gap-[10px]'>
  <h4 className='text-customSkyblue'><Link to="/LogIn">Login</Link></h4>
  <img className='w-[10.67px] h-[10p.67px]' src={arrowRight} alt="" />
</ol>
            <ol className="hidden  md:flex">

<button className='items-center py-1 px-5 md md:py-[14px] text-white rounded-[10px] lg:px-[32px]  bg-customSkyblue text-nowrap'><Link to="/SignUp">Sign up</Link></button>

</ol>
       </div>
       </div>
       </div>










        <ol>
          <button onClick={toggleMenu} className="items-center md:hidden justify-center border ml-3 px-1 mt-2 text-sm font-medium text-gray-700   rounded-[40px] shadow-sm hover:bg-customSkyblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="menu-button" aria-expanded="true" aria-haspopup="true">
            {/* <!-- Cloudinary Image --> */}
            <img src={harburgermenu} alt="harburgermenu" class="w-10  rounded-[100%] h-8 " />



          </button>

          {/* <!-- Dropdown menu --> */}

          {isOpen && (<div className="md:hidden z-50   flex flex-col absolute right-0 mt-6 w-56 origin-top-right bg-white border  border-gray-200 divide- divide-gray-100 rounded-md shadow-lg outline-none" role="menu"  >
            <div class="py-1  " onMouseLeave={closeMenu}>
              <div className="text-left w-40">
              <a href="#" className="text-gray-700 block px-4 py-1 text-lg hover:border-b-2 w-[150px]  hover:border-customSkyblue" role="menuitem"><Link to="/">Explore events</Link></a>
              <a href="#" className="text-gray-700 block px-4 py-1 text-lg hover:border-b-2 w-28 hover:border-customSkyblue" role="menuitem"> <Link to="/">My Ticket</Link></a>
              <a href="#" className="text-gray-700 block px-4 py-1 mb-4 text-lg hover:border-b-2 w-20 hover:border-customSkyblue" role="menuitem"><Link to="/">About</Link></a>
              </div><div className="flex">  <a href="#" className='flex text-gray-700  px-4 py-1 text-sm gap-[10px]'>
                <h4 className='hover:text-customSkyblue text-xl mb-3 text-sky-900'> <Link to="/LogIn">Login</Link></h4>
                <img className='w-[10.67px] h-[10p.67px]' src={arrowRight} alt="" /></a>

                <button href="#" className=' items-center  px-5  py-0 text-xl hover:bg-sky-900 rounded-[10px] lg:px-[32px] bg-customSkyblue text-nowrap'><Link to="/signUp">Sign up</Link></button>
              </div>
            </div>

          </div>)}
        </ol> </div>
  
     </div>







  )
}

export default Navbar

