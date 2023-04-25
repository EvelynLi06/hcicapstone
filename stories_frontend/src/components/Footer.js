import React from 'react'
import './styles/Footer.css';

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-row sitemap">
        <div className="M">Sitemap</div>
        <hr width="100%" />
        <div className="columns">
          <div className="left">
            <div>Home</div>
            <div>Share</div>
          </div>
          <div className="right">
            <div>Get Food</div>
            <div>Offer Help</div>
          </div>
        </div>
      </div>
      <div className="footer-row logo">
        <img id="footer-logo" src="/logo.png" alt="findfood.guide logo" />
        <div className="XL">Stories at FindFood.Guide</div>
        <div className="S">Help us improve by <u><b>giving your feedback</b></u>!</div>
      </div>
      <div className="footer-row social">
        <div className="M">Social</div> 
        <hr width="100%"  />
        <img id="footer-social-icons" src="/social.png" alt="findfood.guide socials" />
      </div>
    </div>
  )
}

export default Footer
