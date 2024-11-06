import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [adminName, setAdminName] = useState(localStorage.getItem('adminName') || ''); // Initialize with localStorage value
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('adminName');
    if (name) {
      setAdminName(name); 
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminToken');
    setAdminName(''); 
    navigate('/signup');
  };

  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='/logo.webp' alt="Logo" />
        <span>Internship Portal</span>
      </div>
      <ul className="nav-links">
        {['Home', 'Internships', 'Skill Development', 'Interview Preparation', 'Career Roadmap'].map((item, index) => (
          <li key={index} className="nav-item" onMouseEnter={() => togglePopup(index)} onMouseLeave={() => togglePopup(null)}>
            <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`}>
              {item}
            </Link>
            {activePopup === index && (
              <div className="popup-message">
                {item === 'Home' ? 'Navigate to home page' :
                item === 'Internships' ? 'Explore various internship opportunities' :
                `Explore ${item}`}
              </div>
            )}
          </li>
        ))}

        {adminName ? (
          <>
            <li className="icon-circle">
              {adminName.charAt(0).toUpperCase()}
            </li>
            <li className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-toggle">Options</button>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <Link to="/admin/account" className="dropdown-item">Admin Account</Link>
                  <button onClick={handleSignOut} className="dropdown-item">Sign Out</button>
                </div>
              )}
            </li>
          </>
        ) : (
          <li>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
