import React, { useEffect, useState } from 'react'
import'./Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className = {`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt=" "className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-320} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-180} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-320} duration={500}>Gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-320} duration={500}>Products</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className = 'btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
