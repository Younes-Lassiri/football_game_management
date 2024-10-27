import React from 'react';
import Nav from '../nav/Nav';
import heroImage from '../../assets/landing_bg.webp';
import { FaSearch } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <div>
      <Nav />
      <div
        className='w-full  bg-cover bg-center flex flex-col justify-end items-start md:pl-[8rem] md:pb-[6rem] pb-[2rem] '
        style={{
          height: `calc(100vh - 72px)`,
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className='bg-black bg-opacity-50 p-6 rounded-md text-white text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to BookYourGame</h1>
          <p className='text-lg md:text-xl mb-6'>
            Book your favorite stadium and play the beautiful game.
          </p>
          
          <div className='flex items-start justify-center'>
            <div className='relative w-full md:w-1/2'>
              <input
                type='text'
                placeholder='Search for a stadium...'
                className='pl-10 w-full pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-red-500'
              />
              <FaSearch className='absolute left-2 top-[15px] text-black ' />
            </div>
            <button className='bg-red-600 text-white py-2 px-4 rounded-md ml-2 hover:bg-red-700 transition'>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
