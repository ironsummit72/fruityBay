import React from 'react'
import "./home.css"
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
    <div className="home_container">
      <div className="sec1">
        <img src="./animations/freeshippinganimated.svg" alt="" className="illistrations" />
        <h2 className="heading">Get Free Shipping On All Orders</h2>
      </div>
      <p className="description">Welcome to FruityBay, where freshness meets doorstep convenience! Our app is your passport to a bounty of nature, delivered FREE to your door. Experience the goodness of farm-fresh fruits, handpicked and packed just for you. Navigate through our user-friendly interface, choose from a vibrant selection, and enjoy swift, cost-free delivery. Embrace a healthier lifestyle with our hassle-free service, ensuring you savor the juiciest, most delicious fruits without leaving your home. FruityBay: Where health, taste, and convenience come together, making every bite a delightful experience, all with the added perk of FREE delivery!</p>
    </div>
      <Footer/>
    </>
  )
}

export default Home