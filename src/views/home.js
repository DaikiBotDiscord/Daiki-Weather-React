import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import WeatherContent from '../components/weather-content'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Daiki Weather</title>
        <meta property="og:title" content="Daiki Weather" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <NavbarInteractive
        text={
          <Fragment>
            <span className="home-text100">Forcast</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text101">Lightning</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text102">Alerts</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text103">
              <span className="home-text104">Forcast</span>
              <br></br>
            </span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text106">
              <span>Lightning</span>
              <br></br>
            </span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text109">
              <span className="home-text110">Alerts</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></NavbarInteractive>
      <div className="home-layout251 thq-section-padding">
        <div className="home-max-width thq-section-max-width">
          <WeatherContent
            heading={
              <Fragment>
                <span className="home-text112">
                  <span>Location Name</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text115">##°</span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-feature2-description10 thq-body-small">
                  <span>Feels Like</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description8={
              <Fragment>
                <span className="home-feature2-description11 thq-body-small">
                  <span>Humidity</span>
                  <br></br>
                  <span>##%</span>
                </span>
              </Fragment>
            }
            feature2Description81={
              <Fragment>
                <span className="home-feature2-description12 thq-body-small">
                  <span>Windchill</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description82={
              <Fragment>
                <span className="home-feature2-description13 thq-body-small">
                  <span>Avg. Wind</span>
                  <br></br>
                  <span>DIR ## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description811={
              <Fragment>
                <span className="home-feature2-description14 thq-body-small">
                  <span>Wind Gust</span>
                  <br className="home-text132"></br>
                  <span>## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
          ></WeatherContent>
          <WeatherContent
            heading={
              <Fragment>
                <span className="home-text135">
                  <span>Location Name</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text138">##°</span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-feature2-description15 thq-body-small">
                  <span>Feels Like</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description8={
              <Fragment>
                <span className="home-feature2-description16 thq-body-small">
                  <span>Humidity</span>
                  <br></br>
                  <span>##%</span>
                </span>
              </Fragment>
            }
            feature2Description81={
              <Fragment>
                <span className="home-feature2-description17 thq-body-small">
                  <span>Windchill</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description82={
              <Fragment>
                <span className="home-feature2-description18 thq-body-small">
                  <span>Avg. Wind</span>
                  <br></br>
                  <span>DIR ## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description811={
              <Fragment>
                <span className="home-feature2-description19 thq-body-small">
                  <span>Wind Gust</span>
                  <br className="home-text155"></br>
                  <span>## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
          ></WeatherContent>
          <WeatherContent
            heading={
              <Fragment>
                <span className="home-text158">
                  <span>Location Name</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text161">##°</span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-feature2-description20 thq-body-small">
                  <span>Feels Like</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description8={
              <Fragment>
                <span className="home-feature2-description21 thq-body-small">
                  <span>Humidity</span>
                  <br></br>
                  <span>##%</span>
                </span>
              </Fragment>
            }
            feature2Description81={
              <Fragment>
                <span className="home-feature2-description22 thq-body-small">
                  <span>Windchill</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description82={
              <Fragment>
                <span className="home-feature2-description23 thq-body-small">
                  <span>Avg. Wind</span>
                  <br></br>
                  <span>DIR ## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description811={
              <Fragment>
                <span className="home-feature2-description24 thq-body-small">
                  <span>Wind Gust</span>
                  <br className="home-text178"></br>
                  <span>## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
          ></WeatherContent>
          <WeatherContent
            heading={
              <Fragment>
                <span className="home-text181">
                  <span>Location Name</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text184">##°</span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-feature2-description25 thq-body-small">
                  <span>Feels Like</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description8={
              <Fragment>
                <span className="home-feature2-description26 thq-body-small">
                  <span>Humidity</span>
                  <br></br>
                  <span>##%</span>
                </span>
              </Fragment>
            }
            feature2Description81={
              <Fragment>
                <span className="home-feature2-description27 thq-body-small">
                  <span>Windchill</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description82={
              <Fragment>
                <span className="home-feature2-description28 thq-body-small">
                  <span>Avg. Wind</span>
                  <br></br>
                  <span>DIR ## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description811={
              <Fragment>
                <span className="home-feature2-description29 thq-body-small">
                  <span>Wind Gust</span>
                  <br className="home-text201"></br>
                  <span>## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
          ></WeatherContent>
          <WeatherContent
            heading={
              <Fragment>
                <span className="home-text204">
                  <span>Location Name</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text207">##°</span>
              </Fragment>
            }
            feature2Description={
              <Fragment>
                <span className="home-feature2-description30 thq-body-small">
                  <span>Feels Like</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description8={
              <Fragment>
                <span className="home-feature2-description31 thq-body-small">
                  <span>Humidity</span>
                  <br></br>
                  <span>##%</span>
                </span>
              </Fragment>
            }
            feature2Description81={
              <Fragment>
                <span className="home-feature2-description32 thq-body-small">
                  <span>Windchill</span>
                  <br></br>
                  <span>##°</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description82={
              <Fragment>
                <span className="home-feature2-description33 thq-body-small">
                  <span>Avg. Wind</span>
                  <br></br>
                  <span>DIR ## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
            feature2Description811={
              <Fragment>
                <span className="home-feature2-description34 thq-body-small">
                  <span>Wind Gust</span>
                  <br className="home-text224"></br>
                  <span>## MPH</span>
                  <br></br>
                </span>
              </Fragment>
            }
          ></WeatherContent>
        </div>
      </div>
    </div>
  )
}

export default Home
