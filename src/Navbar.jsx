import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from './assets/Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);
function handleChange() {
  console.log(handleChange);
}
    
return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F9EBC8] text-black-300'>
    <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
        </div>
        
      {/* menu */}
    
    <ul className='hidden md:flex'>
        <li>
        <Link to='home' smooth={true} duration={500}>
            Home
        </Link>
        </li>
        <li>
        <Link to='about' smooth={true} duration={500}>
            Horses
        </Link>
        </li>
        <li>
        <Link to='skills' smooth={true} duration={500}>
            Equipment
        </Link>
        </li>
        <li>
        <Link to='work' smooth={true} duration={500}>
            Support
        </Link>
        </li>
        <li>
        <Link to='contact' smooth={true} duration={500}>
            Contact
        </Link>
        </li>
        </ul>
        
        {/* Search Bar */}

        <form class="rounded-md items-center flex divide-x">
        <select class="rounded-l-md  py-4">
            <option selected="selected">All Category</option>
            <option>Horses</option>
            <option>Equipment</option>
            <option>Edibles</option>
        </select>
        <input class="py-3.5 px-2 appearance-none block w-full  focus:outline-none focus:bg-green-50 placeholder-gray-500 placeholder-opacity-25" name="search" placeholder="Search Products ....." type="search"/>
        <button class="py-3 px-2 bg-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8 text-gray-50 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        </form>

      {/* Hamburger */}
    
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

      {/* Mobile menu */}
    
    <ul
        className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#F9EBC8] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Horses
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Equipment
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Support
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
        </Link>
        </li>
    </ul>
    </div>
    );
};

export default Navbar;