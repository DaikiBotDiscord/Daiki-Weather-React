import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import WeatherContent from '../components/weather-content';
import NavBar from '../components/navbar-interactive'; // Re-use your existing NavBar component
import './home.css'; // Keep your existing CSS

const Home = () => {
  const [location, setLocation] = useState(''); // Location state for search input
  const [weatherData, setWeatherData] = useState(null); // Weather data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [hasSearched, setHasSearched] = useState(false); // Track if the user has searched

  const urlLocation = useLocation(); // Get current URL info
  const history = useHistory(); // To manage URL navigation

  // Function to fetch weather data for a specific location
  const fetchWeatherData = async (loc) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.weather.daiki-bot.xyz/api/forcast/current?location=${encodeURIComponent(loc)}`
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      setWeatherData(data);
      setHasSearched(true); // Mark that the user has searched
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle URL query parameter for location
  useEffect(() => {
    const queryParams = new URLSearchParams(urlLocation.search);
    const locationParam = queryParams.get('location');
    if (locationParam) {
      setLocation(locationParam); // Set the input based on the URL parameter
      fetchWeatherData(locationParam); // Fetch weather data for the URL location
      setHasSearched(true); // Mark that the user has searched
    }
  }, [urlLocation.search]); // Trigger on URL change

  // Handle search form submission from the NavBar
  const handleSearch = (searchLocation) => {
    if (searchLocation) {
      setLocation(searchLocation);
      // Update the URL with the new location
      history.push(`?location=${encodeURIComponent(searchLocation)}`);
      fetchWeatherData(searchLocation); // Fetch weather data
    }
  };

  return (
    <div className="home-container">
      {/* Use your existing NavBar and pass the handleSearch function */}
      <NavBar onSearch={handleSearch} />

      <div className="home-layout251">
        <div className="home-max-width">
          {loading && <div>Loading...</div>}
          {error && <div className="error">{error}</div>}

          {!hasSearched && (
            <div className="no-search-message" style={{ color: 'white' }}>
              <h2>Please use the search bar to view current weather data.</h2>
            </div>
          )}

          {hasSearched && weatherData && (
            <WeatherContent
              heading={<span className='home-text112'>{weatherData.location.name}</span>}
              feature1ImageSrc={`https:${weatherData.current.condition.icon}`}
              feature2Title={<span className='home-text115'>{Math.round(weatherData.current.temp_f)}°</span>}
              feature2Description={<span className='home-feature2-description10 thq-body-small'>Feels Like <br />{Math.round(weatherData.current.feelslike_f)}°</span>}
              feature2Description8={<span className='home-feature2-description11 thq-body-small'>Humidity <br />{weatherData.current.humidity}%</span>}
              feature2Description81={<span className='home-feature2-description12 thq-body-small'>Windchill <br />{Math.round(weatherData.current.windchill_f)}°</span>}
              feature2Description82={<span className='home-feature2-description13 thq-body-small'>Avg. Wind <br />{weatherData.current.wind_dir} {weatherData.current.wind_mph} MPH</span>}
              feature2Description811={<span className='home-feature2-description14 thq-body-small'>Wind Gust <br />{weatherData.current.gust_mph} MPH</span>}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;