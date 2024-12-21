import React from 'react'
import { theImage } from './images'
import './css/head.css'
const Hero = () => {
  return (
    <div id="head">
      <div id="netLogo">
        <div id="nlDiv"><img src={theImage[0].src} alt="Netflix Logo" /></div>
        <div id="nlButton">
          <button>Sign In</button>
        </div>
      </div>
      <div id="netImg"
      >
        <div id="div">
          <div id="niText">
            Unlimited Movies, TV shows, and more
          </div>
          <div id="niTextSmall">
            Starts at N2,200. Cancel anytime
          </div>
        </div>
      </div>
      <div id="lastFH">
        <span>
          Ready to watch? Enter your email to create or restart your membership
        </span>
        <div id="emailPart">
          <div id="ePInput">
            <input type="email" placeholder='Email address' />
          </div>
          <div id="ePButton">
            <button>Get Started {'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
