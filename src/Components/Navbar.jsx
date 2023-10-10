import React,{useState} from "react";
import {Link} from 'react-scroll';
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"Skills",link:"skills"},
        {name:"About",link:"about"},
        {name:"Contact",link:"skills"},
        {name:"Projects",link:"projects"},
        {name:"Skills",link:"skills"}
      ];
      let [open, setOpen] =useState(false);
      // Handling the Closing the navbar when a link is clicked
      const handleLinkClick = () => {
        setOpen(false); 
      };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-30'>
           <div className='md:flex items-center justify-between text-gray-100  bg-[#0B0E11] py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <span style={{fontFamily:'cursive'}} className='text-[#00df9a] text-[1.2em]'>ALO ND.</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-10 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linkng items */}
            <ul className={`md:flex md:items-center md:justify-center md:pb-0 pb-12 absolute md:static bg-[#0B0E11] md:z-auto z-[-1] left-0 w-[30%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={link.link} spy={true} smooth={true} onClick={handleLinkClick} className='text-gray-300 text-2xl border-b-5 border-gray-700  hover:text-[#00df9a] duration-500'>
                          {link.name}
                        </Link>
                    </li>))
                }
            </ul>
           </div>
        </div>
    );
};

export default Navbar;