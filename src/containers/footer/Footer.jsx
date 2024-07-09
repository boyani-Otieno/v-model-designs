import React from 'react';
import gpt3Logo from '../../assets/v.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want the best model designs in the Market?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Contact us today!</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> ABC Towers, 6th floor,. ABC Place, Waiyaki Way,. P.O Box -00100. Nairobi, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Vincent Onditi Model Designs</p>
        <p>+254 712345678</p>
        <p>vincentonditi111@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 V-Designs. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
