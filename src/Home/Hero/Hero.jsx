import React from 'react';
import Nav from '../nav/Nav';
import heroImage from '../../assets/landing_bg.webp';
import { FaSearch } from 'react-icons/fa'; 
import font from '../../assets/font.png';
const Hero = () => {
  return (
    <div>
      <Nav />
      <div className='main-landing-section'>
        <h1 className='main-landing-section-h1'>Play Football</h1>
        <img src={font}/>
        <div className='main-landing-section-book-infos'>
          <h1>Find a game near you</h1>
          <div className='main-landing-section-book-infos-input'>
            <div className='main-landing-section-book-infos-input-left'>
              <div className='main-landing-section-book-infos-input-left-boxicon'><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#01031c"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></div>
              <input type='text' placeholder='City, postcode or area'/>
            </div>
            <div className='main-landing-section-book-infos-input-button'><button>Search<span> for games</span></button></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;