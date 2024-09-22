import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center divide-gray-800'>
     
      <div className='flex flex-col'>
        <TbBrandGithubFilled/>
        <FaLinkedinIn/>
        <SiLeetcode/>
      </div>
    </div>
  )
}

export default Footer
