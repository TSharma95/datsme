import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer--background"></div>
        <div className="footer__top">
          <div className="company__overview">
            <div className="logo__section">
              <img className="logo__section--icon" src="assets/datsme-icon.svg" alt="Datsme icon" />
              <img className="logo__section--main" src="assets/datsme.svg" alt="Datsme logo" />
              <span className="logo__section--version">v3.0</span>
            </div>
            <ul className="contact__section">
              <li><img src="assets/footer-location.svg" alt="" /><span>419, Technology Business
                Incubator, NSUT, Delhi</span></li>
              <li><img src="assets/footer-call.svg" alt="" /><span>+91-9716288892</span></li>
              <li><img src="assets/footer-mail.svg" alt="" /><span>hello@datsme.io</span></li>
            </ul>
          </div>
          <div className="company__details">
            <ul className="outer__list">
              <li>
                <div className="text">
                  <p>Explore</p>
                </div>
                <ul className="inner__list">
                  <li>Find Bonding Styles</li>
                  <li>Pricing</li>
                </ul>
              </li>
              <li>
                <div className="text">
                  <p>Product</p>
                </div>
                <ul className="inner__list">
                  <li>Find Friends</li>
                  <li>Make Friends</li>
                  <li>Keep Friends</li>
                </ul>
              </li>
              <li>
                <div className="text">
                  <p>Help & Support</p>
                </div>
                <ul className="inner__list">
                  <li>About Company</li>
                  <li>Sitemap</li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li>Blog</li>
                </ul>
              </li>
              <li>
                <div className="text">
                  <p>Social Media</p>
                </div>
                <ul className="inner__list">
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__middle">
          <div className="contact__section">
            <p>Stay Updated With Datsme</p>
            <div className="contact--mail">
              <input type="email" name="" id="" placeholder="Your Email Address" />
              <img src="assets/footer-mail.svg" alt="" />
            </div>
          </div>
          <div className="download__section">
            <p>Get Datsme On</p>
            <div className="download--buttons">
              <img src="assets/google-play.png" alt="" />
              <img src="assets/app-store.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom--background"></div>
          <p>© Copyright 2023 Different Angle 42 Pvt. Ltd. All rights reserved.</p>
          <ul className='footer__bottom__list'>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
