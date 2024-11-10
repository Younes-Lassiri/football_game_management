import React, { useContext, useState } from 'react';
import { navLinks } from './navLinks';
import { FaBars } from 'react-icons/fa';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import website_logo from '../../assets/website_logo.png';
import { AuthContext } from '../../context/AuthContext';
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      {/* Large screens */}
      <div className='hidden md:grid grid-cols-[0.5fr_1fr_0.5fr] px-[50px] items-center h-[72px]'>
        <div className='navbar-header-logo'><img src={website_logo}/></div>
        <div> 
          <ul className='flex gap-[35px] items-center justify-center list-none'>
            <li>
              <Link to='/' className='text-[#01031e] text-[15px] font-semibold transition-colors duration-300 hover:text-[#d1002a]'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/pages/about' className='text-[#01031e] text-[15px] font-semibold transition-colors duration-300 hover:text-[#d1002a]'>
                About
              </Link>
            </li>
            <li>
              <Link to='/pages/play' className='text-[#01031e] text-[15px] font-semibold transition-colors duration-300 hover:text-[#d1002a]'>
              Play Football
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-[#01031e] text-[15px] font-semibold transition-colors duration-300 hover:text-[#d1002a]'>
              Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-end space-x-5'>
        {isAuthenticated? (
          <Link to="/user/dashboard">
          <button
            className="bg-[#212fab] text-white px-4 py-2 rounded-md hover:bg-[#1a2290] transition"
            style={{ fontSize: '13px' }}
          >
            <span className="inline-flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h4V3H3v7zm0 11h4v-7H3v7zM10 21h4v-4h-4v4zm0-10h4V3h-4v8zm7 10h4v-7h-4v7zm0-18v7h4V3h-4z"
                />
              </svg>
              <span>Dashboard</span>
            </span>
          </button>
        </Link>
        ): (
          <>
          <Link to='/users/sign_up'>
          <button className='p-2 px-[16px] rounded-[4px] font-medium text-[14px]' style={{ color: '#01031e', backgroundColor: '#eef0fc' }}>Register</button>
          </Link>
          <Link to='/users/login'>
          <button className='bg-[#d1002a] text-white p-2 px-[16px] rounded-[4px] font-medium text-[14px]'>
            Sign In
          </button>
          </Link>
          </>
        )}
        </div>
      </div>
      {/* Small screens */}
      <div className='flex items-center justify-between md:hidden px-[25px] h-[72px]'>
        <div className='navbar-header-logo'><img src={website_logo}/></div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className=' focus:outline-none'
        >
          {isMobileMenuOpen ? (
            <BiX className='w-6 h-6' />
          ) : (
            <div 
            className='p-[9px]' 
            style={{ transition: 'background-color 0.3s', borderRadius: '5px' }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#eef0fc'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <FaBars className='w-5 h-5' />
          </div>

          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden mx-4 pb-4'>
          <div className='flex flex-col font-semibold rounded-md gap-2 py-3'>
          {isAuthenticated? (
            <Link to="/user/dashboard">
            <button
              className="bg-[#212fab] text-white px-4 py-2 rounded-md hover:bg-[#1a2290] transition"
              style={{ fontSize: '13px', width: '100%' }}
            >
              <span className="inline-flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h4V3H3v7zm0 11h4v-7H3v7zM10 21h4v-4h-4v4zm0-10h4V3h-4v8zm7 10h4v-7h-4v7zm0-18v7h4V3h-4z"
                  />
                </svg>
                <span>Dashboard</span>
              </span>
            </button>
          </Link>
          ): (
            <>
            <Link to='/users/sign_up'>
          <button className='py-2 px-[16px] rounded-[4px] font-medium text-[14px]' style={{ color: '#01031e', backgroundColor: '#eef0fc', width: '100%'}}>Register</button>
          </Link>
          <Link to='/users/login'>
          <button className='bg-red-600 text-white py-2 px-[16px] rounded-[4px] font-medium text-[14px]' style={{ width: '100%'}}>Sign In</button>
          </Link>
            </>
          )}
          </div>

          <div className='pt-2 flex flex-col space-y-4 font-semibold'>
            {navLinks.map((navLink) => (
              <div key={navLink.id} className='relative group'>
                <Link to={navLink.href} className='hover:text-slate-500'>
                  {navLink.label}
                </Link>
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
