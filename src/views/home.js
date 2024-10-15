import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import NavbarInteractive from '../components/navbar-interactive'
import WeatherContent from '../components/weather-content';
import './home.css';

const predefinedLocations = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ'
];

const Home = () => {
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

  // Fetch weather data for all predefined locations when component mounts
  useEffect(() => {
    const loadWeatherData = async () => {
      const allWeatherData = await Promise.all(
        predefinedLocations.map(async (location) => {
          const data = await fetchWeatherData(location);
          return data;
        })
      );
      setWeatherData(allWeatherData.filter((data) => data !== null)); // Add only valid data
    };

    loadWeatherData();
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Daiki Weather</title>
        <meta property="og:title" content="Daiki Weather" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <NavbarInteractive />
      <div className="home-layout251 thq-section-padding">
        <div className="home-max-width thq-section-max-width">
          {weatherData.length === 0 ? (
            <div>Loading weather data...</div>
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
                    <span className="home-text115">{Math.round(data.current.temp_f)}°</span>
                  </Fragment>
                }
                feature2Description={
                  <Fragment>
                    <span className="home-feature2-description10 thq-body-small">
                      <span>Feels Like</span>
                      <br />
                      <span>{Math.round(data.current.feelslike_f)}°</span>
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
                      <span>{Math.round(data.current.windchill_f)}°</span>
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
