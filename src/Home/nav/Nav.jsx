import React, { useState } from 'react';
import { navLinks } from './navLinks';
import { FaBars } from 'react-icons/fa';
import { BiX } from 'react-icons/bi';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Large screens */}
      <div className='hidden md:flex justify-between px-[8rem] items-center h-[72px] '>
        <div>BookYourGame</div>
        <div className='space-x-5'>
          <button className='bg-gray-100 p-2 rounded-[4px] font-semibold'>Register</button>
          <button className='bg-red-600 text-white p-2 rounded-[4px] font-semibold'>Sign In</button>
        </div>
      </div>

      {/* Small screens */}
      <div className='flex items-center justify-between md:hidden p-4 '>
        <div>BookYourGame</div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className=' focus:outline-none'
        >
          {isMobileMenuOpen ? (
            <BiX className='w-6 h-6' />
          ) : (
            <FaBars className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden mx-4 pb-4'>
          <div className='flex flex-col  p-3 font-semibold rounded-md gap-2'>
            <button className='bg-gray-200 p-2 rounded-[4px] font-semibold'>Register</button>
            <button className='bg-red-600 text-white p-2 rounded-[4px] font-semibold'>Sign In</button>
          </div>

          <div className='pt-2 flex flex-col space-y-4 font-semibold'>
            {navLinks.map((navLink) => (
              <div key={navLink.id} className='relative group'>
                <a href={navLink.href} className='hover:text-slate-500'>
                  {navLink.label}
                </a>
                <span className='absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
