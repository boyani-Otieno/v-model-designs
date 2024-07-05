import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/Ideas.jpeg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Designing Dimensions, Creating Realities with V Designs
      </h1>
      <p>At V Designs,them to life. My design solutions are crafted to infuse joy and excitement into every project. Join me in celebrating the art of design, where every detail contributes to creating extraordinary experiences.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Check out what my clients have to say!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
