import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Innovation & Creativity',
    text: 'We embrace innovation in design, constantly seeking new ideas and approaches to create unique and functional spaces that inspire.',
  },
  {
    title: 'Excellence & Sustainability',
    text: 'We are committed to achieving excellence in every aspect of our work, from initial concept to final execution, ensuring exceptional quality and client satisfaction.',
  },
  {
    title: 'Integrity & Collaboration',
    text: ' We uphold integrity in all our interactions and decisions, fostering trust and transparency while adhering to ethical standards in our industry.',
  },
  {
    title: 'Client-Centric Approach',
    text: 'We prioritize understanding and meeting the unique requirements of our clients, ensuring their vision and goals are realized through personalized and responsive design solutions.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Embrace the future today with our visionary designs. Step into tomorrow and make it a reality.</h1>
      <p>Hire Us and Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
