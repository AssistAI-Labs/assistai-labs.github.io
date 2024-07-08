import React, { useState } from 'react';
import logo from '../../assets/assistailogo2.png'
import { Link } from 'react-scroll';
import { RiMenuFill } from "react-icons/ri";
import './style.css'


const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src={logo} alt="" className='logo-image'/>
        </div> 
        <div className='outer-menu'>
          <div className='menu-button-div'>
            <button className='menu-button' onClick={() => setToggle(!toggle)}><RiMenuFill /></button>
          </div>
          <div className={toggle ? 'navbar-list navbar-list-mobile' : 'navbar-list'}>
            <div className='navbar-list-items'><Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setToggle(!toggle)}
              >
                Home
              </Link>
            </div>
            <div className='navbar-list-items'>
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setToggle(!toggle)}
              >
                About us
              </Link>
            </div>
            <div className='navbar-list-items'>
              <Link
                to="ourTeam"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setToggle(!toggle)}
              >
                Our team
              </Link>
            </div>
            <div className='navbar-list-items'>
              <Link
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setToggle(!toggle)}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NavBar
