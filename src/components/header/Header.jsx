import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>
<div className="header">
  <Link to={"/logo"} className='logo'>
    <img src='./logo/companylogo.png' alt='companyLogo' className='logo-img'></img>
    <h2 className="companyName">FruityBay</h2>
  </Link>
  <ul className='nav-link-list'>
    <li>
      <Link className='nav-links' to={'/'}>Home</Link>
    </li>
    <li>
      <Link className='nav-links' to={'/about'}>About</Link>
    </li>
    <li>
      <Link className='nav-links' to={'/contact'}>Contact</Link>
    </li>
    <li>
      <Link className='nav-links' to={'/github'}>Github</Link>
    </li>
  </ul>
  <div className="buttons">
    <Link className='login' to={'/login'}>Log in</Link>
    <Link className='getstarted' to={'/getstarted'}>Get started</Link>
  </div>
</div>
   </>
  )
}

export default Header