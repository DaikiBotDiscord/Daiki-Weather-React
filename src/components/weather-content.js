import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './weather-content.css'

const WeatherContent = (props) => {
  return (
    <div className="weather-content-weather-content">
      <div className="weather-content-row thq-flex-row">
        <h1>
          {props.heading ?? (
            <Fragment>
              <h1 className="weather-content-text22">
                <span>Location Name</span>
                <br></br>
              </h1>
            </Fragment>
          )}
        </h1>
        <div className="weather-content-feature1 thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="weather-content-feature1-image"
          />
          <div className="weather-content-container1">
            <div className="weather-content-content">
              <h3>
                {props.feature2Title ?? (
                  <Fragment>
                    <h3 className="weather-content-text25">##°</h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="weather-content-feature2-description18 thq-body-small">
                      <span>Feels Like</span>
                      <br></br>
                      <span>##°</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="weather-content-container2">
              <span>
                {props.feature2Description8 ?? (
                  <Fragment>
                    <span className="weather-content-feature2-description15 thq-body-small">
                      <span>Humidity</span>
                      <br></br>
                      <span>##%</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.feature2Description81 ?? (
                  <Fragment>
                    <span className="weather-content-feature2-description17 thq-body-small">
                      <span>Windchill</span>
                      <br></br>
                      <span>##°</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="weather-content-container3">
              <span>
                {props.feature2Description82 ?? (
                  <Fragment>
                    <span className="weather-content-feature2-description19 thq-body-small">
                      <span>Avg. Wind</span>
                      <br></br>
                      <span>DIR ## MPH</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.feature2Description811 ?? (
                  <Fragment>
                    <span className="weather-content-feature2-description16 thq-body-small">
                      <span>Wind Gust</span>
                      <br className="weather-content-text15"></br>
                      <span>## MPH</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

WeatherContent.defaultProps = {
  feature2Description8: undefined,
  feature1ImageSrc: 'https://cdn.weatherapi.com/weather/128x128/day/116.png',
  feature2Description811: undefined,
  feature2Description81: undefined,
  heading: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature1ImageAlt: 'Intuitive Interface Image',
  feature2Description82: undefined,
}

WeatherContent.propTypes = {
  feature2Description8: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description811: PropTypes.element,
  feature2Description81: PropTypes.element,
  heading: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2Description82: PropTypes.element,
}

export default WeatherContent
