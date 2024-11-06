// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero= () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/*<h1>Explore Internship Opportunities and Build Your Career</h1>
        <p>Find your path to success with internship listings, skill development, and interview prep tools.</p> */}
         <Link to="/signup" className="cta-button">Get Started</Link>
      </div>
    </section>
  );
};

export default Hero;
