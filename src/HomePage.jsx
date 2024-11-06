import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Font Awesome icon import
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <section id="home-page" className="home-page">
      <div className="hero-content">
        <h1 className="hero-heading">
          Search, Apply & Get Your Internship
        </h1>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="input-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search internships..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="search-icon" />
          </div>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </section>
  );
};

export default HomePage;
