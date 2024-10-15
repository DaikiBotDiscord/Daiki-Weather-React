import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './navbar-interactive.css';

const NavbarInteractive = (props) => {
  const [searchInput, setSearchInput] = useState('');

  // Handle the form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() && props.onSearch) {
      props.onSearch(searchInput);
    }
  };

  return (
    <div className="navbar-interactive-container">
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive"
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="navbar-interactive-image"
        />
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive-desktop-menu"
        >
          <nav className="navbar-interactive-links1">
            <span>
              {props.text ?? (
                <span className="navbar-interactive-text16">Forcast</span>
              )}
            </span>
            <span>
              {props.text1 ?? (
                <span className="navbar-interactive-text17">Lightning</span>
              )}
            </span>
            <span>
              {props.text2 ?? (
                <span className="navbar-interactive-text18">Alerts</span>
              )}
            </span>
          </nav>
          <div className="navbar-interactive-buttons1">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className='navbar-interactive-text18'>Search</button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

NavbarInteractive.defaultProps = {
  imageSrc: '/daiki%20weather-200h.png',
  imageAlt: 'logo',
  text: undefined,
  text1: undefined,
  text2: undefined,
  textinputPlaceholder: 'Search Location',
};

NavbarInteractive.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  onSearch: PropTypes.func, // Pass the search function
};

export default NavbarInteractive;
