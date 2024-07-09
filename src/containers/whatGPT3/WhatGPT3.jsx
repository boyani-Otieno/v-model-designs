import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What we are all about" text="As a model designer, my focus is on creating innovative and aesthetically pleasing designs that combine functionality with elegance. I aim to meet the unique needs of our clients through custom solutions, leveraging advanced design technologies and a deep understanding of market trends." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Explore limitless possibilities with our visionary designs.</h1>
      <p>Explore for more...</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Apartments" text="Our mission is to revolutionize apartment living through cutting-edge design solutions." />
      <Feature title="Residential Buildings" text="Crafting stylish and functional living spaces and transforming spaces into exceptional living environments." />
      <Feature title="Religious Buildings" text="Honoring faith through inspired architectural design. Crafting sacred spaces that inspire reverence and community." />
    </div>
  </div>
);

export default WhatGPT3;
