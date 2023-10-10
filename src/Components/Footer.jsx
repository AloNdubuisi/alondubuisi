import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div name='skills' className='text-gray-400'>
    <div className='text-center text-[#00df9a] text-3xl'>
        <a href='mailto:alo.ndubuisi07@gmail.com'>Connect with me now on my Email for any Projects</a>
    </div>
        <div className="flex justify-center items-center py-2 my-5">
            <ul className="flex justify-around">
                <li className="p-4">
                    <a className="font-bold text-3xl hover:text-[#fff] rounded duration-300" href="https://www.linkedin.com/in/alo-ndubuisi-465913252/"><FaLinkedin/></a>
                </li>
                <li className="p-4">
                    <a className="font-bold text-3xl hover:text-[#fff] rounded duration-300" href="https://www.instagram.com/alo.ndubuisi/"><FaInstagram/></a>
                </li>
                <li className="p-4">
                    <a className="font-bold text-3xl hover:text-[#fff] rounded duration-300" href="/"><FaTwitter /></a>
                </li>
                <li className="p-4">
                    <a className="font-bold text-3xl hover:text-[#fff] rounded duration-300" href="https://twitter.com/AloNdubuisi01"><FaGithub /></a>
                </li>
            </ul>
        </div>
        <div className='flex justify-center items-center pb-10'>
            <p className='text-gray-500 text-xl px-6'>© Copyright 2023 AlumyTech by Alo Ndubuisi</p>
        </div>
    </div>
  );
}

export default Footer
