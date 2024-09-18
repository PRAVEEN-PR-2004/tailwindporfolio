import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
          
        <header className="fixed top-0 left-0 flex justify-between w-full px-5 py-2 bg-white md:shadow-md ">
            <a href="#" className="font-bold text-black color-primary">PORTFOLIO</a>
            <nav className="hidden md:block">
                <ul className="flex">
                    <Link to='/'>
                    <li className="px-2 text-1xl color-secondary hover:border-b-2 hover:border-b-slate-800"><a href="#">HOME</a></li>
                    </Link>
                     <Link to="/about"> 
                    <li className="px-2 text-1xl color-secondary hover:border-b-2 hover:border-b-slate-800"><a href="#">ABOUT</a></li>
                    </Link>
                    <li className="px-2 text-1xl color-secondary hover:border-b-2 hover:border-b-slate-800"><a href="#">PROJECTS</a></li>
                    <li className="px-2 text-1xl color-secondary hover:border-b-2 hover:border-b-slate-800"><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            {toggleMenu && (
   <nav className='block md:hidden mobile-menu'>
      <ul className="flex flex-col">
      <Link to='/'>
         <li className="px-2 py-3 text-sm font-semibold text-center color-secondary"><a href="#">HOME</a></li>
         </Link>
         <Link to="/about"> 
         <li className="px-2 py-3 text-sm font-semibold text-center color-secondary"><a href="#">ABOUT</a></li>
         </Link>
         <li className="px-2 py-3 text-sm font-semibold text-center color-secondary"><a href="#">PROJECTS</a></li>
         <li className="px-2 py-3 text-sm font-semibold text-center color-secondary"><a href="#">CONTACT</a></li>
      </ul>
   </nav>
)}

            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="h-5 text-black " /></button>
        </header>
        </>
    );
}
