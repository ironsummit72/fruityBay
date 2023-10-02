import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className="footer">
    <Link to={"/logo"} className='footer-logo'>
    <img src='./logo/companylogo.png' alt='companyLogo' className='logo-img-footer'></img>
    <h2 className="companyName">FruityBay <span className='regtm-footer'>&#174;</span></h2>
  </Link>
  <div className="moreLinks">
<div className="resources-sec footer-section">
  <h4 className="footer-section-heading">RESOURCES</h4>
  <Link className='footer-links' to={'/'}>Home</Link>
  <Link className='footer-links' to={'/about'}>About</Link>
</div>
<div className="resources-sec footer-section">
  <h4 className="footer-section-heading">FOLLOW US</h4>
  <Link className='footer-links' to={'/discord'}>Discord</Link>
  <Link className='footer-links' to={'/github'}>Github</Link>
  <Link className='footer-links' to={'/instagram'}>Instagram</Link>
</div>
<div className="resources-sec footer-section">
  <h4 className="footer-section-heading">LEGAL</h4>
  <Link className='footer-links' to={'/'}>Privacy Policy</Link>
  <Link className='footer-links' to={'/about'}>Terms & Conditions</Link>
</div>
  </div>
    </div>
    </>
  )
}

export default Footer