import React from 'react'
import "./header.css"
import { Link, NavLink } from 'react-router-dom'

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
      <NavLink className={({isActive})=>`${isActive ? "nav-links-selected":"nav-links"}`} to={'/'}>Home</NavLink>
    </li>
    <li>
    <NavLink className={({isActive})=>`${isActive ? "nav-links-selected":"nav-links"}`} to={'/about'}>About</NavLink>
    </li>
    <li>
    <NavLink className={({isActive})=>`${isActive ? "nav-links-selected":"nav-links"}`} to={'/contact'}>Contact</NavLink>
    </li>
    <li>
    <NavLink className={({isActive})=>`${isActive ? "nav-links-selected":"nav-links"}`} to={'/github'}>Github</NavLink>
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