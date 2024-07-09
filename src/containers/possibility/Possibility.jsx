import React from 'react';
import possibilityImage from '../../assets/twoV.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Get the best designs ever!</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Looking for top-tier architectural design? Contact us today and experience unparalleled expertise and innovation. Let us bring your vision to life with the finest work in the industry.</p>
      <h4>Get in Contact to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
