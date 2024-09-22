import React from 'react'
import { TbBrandGithub, TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsappSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center divide-gray-800 bg-slate-900'>
     
      <div className='flex flex-row w-1/2 pt-6 pb-6 justify-evenly md:w-1/6 bg-slate-900'>
        <TbBrandGithubFilled  className='text-2xl text-gray-300 transition-colors duration-300 md:text-3xl hover:text-white' />
        <FaLinkedinIn  className='text-2xl text-gray-300 transition-colors duration-300 md:text-3xl hover:text-white'/>
        <FaWhatsapp className='text-2xl text-gray-300 transition-colors duration-300 md:text-3xl hover:text-white'/>
        <SiLeetcode  className='text-2xl text-gray-300 transition-colors duration-300 md:text-3xl hover:text-white'/>
       
        
        
      </div>
      <p className='pb-3 text-xs font-light text-gray-500'>PROTFOLIO CREATED BY PRAVEEN</p>
    </div>
  )
}

export default Footer
