import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import WeatherContent from '../components/weather-content';
import './home.css';

const Home = () => {
  const [location, setLocation] = useState(''); // Empty by default for input
  const [locations, setLocations] = useState([]); // Stores multiple locations
  const [weatherData, setWeatherData] = useState([]); // Stores weather data for multiple locations

  // Function to fetch weather data for a specific location
  const fetchWeatherData = async (loc) => {
    try {
      const response = await fetch(
        `https://api.weather.daiki-bot.xyz/api/forcast/current?location=${encodeURIComponent(loc)}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  // Handle form submission to add a new location
  const handleAddLocation = async (e) => {
    e.preventDefault();
    if (location === '') return; // Prevent adding empty location

    const newWeatherData = await fetchWeatherData(location);
    if (newWeatherData) {
      setLocations([...locations, location]); // Add new location
      setWeatherData([...weatherData, newWeatherData]); // Add fetched weather data
      setLocation(''); // Clear input after adding location
    }
  };

  // Function to clear all locations and weather data
  const handleClearLocations = () => {
    setLocations([]); // Clear all locations
    setWeatherData([]); // Clear all weather data
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Daiki Weather</title>
        <meta property="og:title" content="Daiki Weather" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img alt="logo" src="/daiki%20weather-1500w.png" className="home-image" />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links1">
            <span className="home-text100">Forcast</span>
            <span className="home-text101">Lightning</span>
            <span className="home-text102">Alerts</span>
          </nav>
          <div className="home-buttons1">
            <form onSubmit={handleAddLocation}>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search Location"
                className="input"
              />
              <button type="submit" style={{ color: 'white' }}>Search</button>
              <button type="button" onClick={handleClearLocations} style={{ marginLeft: '10px', color: 'white' }}>
                Clear All
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="home-layout251 thq-section-padding">
        <div className="home-max-width thq-section-max-width">
          {weatherData.length === 0 ? (
            <div>No locations added yet. Add a location to see the weather data.</div>
          ) : (
            weatherData.map((data, index) => (
              <WeatherContent
                key={index}
                heading={
                  <Fragment>
                    <span className="home-text112">
                      <span>{data.location.name}</span>
                      <br />
                    </span>
                  </Fragment>
                }
                feature1ImageSrc={`https:${data.current.condition.icon}`} // Dynamic weather icon
                feature2Title={
                  <Fragment>
                    <span className="home-text115">{data.current.temp_f}°</span>
                  </Fragment>
                }
                feature2Description={
                  <Fragment>
                    <span className="home-feature2-description10 thq-body-small">
                      <span>Feels Like</span>
                      <br />
                      <span>{data.current.feelslike_f}°</span>
                      <br />
                    </span>
                  </Fragment>
                }
                feature2Description8={
                  <Fragment>
                    <span className="home-feature2-description11 thq-body-small">
                      <span>Humidity</span>
                      <br />
                      <span>{data.current.humidity}%</span>
                    </span>
                  </Fragment>
                }
                feature2Description81={
                  <Fragment>
                    <span className="home-feature2-description12 thq-body-small">
                      <span>Windchill</span>
                      <br />
                      <span>{data.current.windchill_f}°</span>
                      <br />
                    </span>
                  </Fragment>
                }
                feature2Description82={
                  <Fragment>
                    <span className="home-feature2-description13 thq-body-small">
                      <span>Avg. Wind</span>
                      <br />
                      <span>{data.current.wind_dir} {data.current.wind_mph} MPH</span>
                      <br />
                    </span>
                  </Fragment>
                }
                feature2Description811={
                  <Fragment>
                    <span className="home-feature2-description14 thq-body-small">
                      <span>Wind Gust</span>
                      <br />
                      <span>{data.current.gust_mph} MPH</span>
                      <br />
                    </span>
                  </Fragment>
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
