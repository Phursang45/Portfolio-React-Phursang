import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from "../../assests/ME.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Phursang Dong</h1>
        <h5 className='text-light'> Fullstack Developer</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials/>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header