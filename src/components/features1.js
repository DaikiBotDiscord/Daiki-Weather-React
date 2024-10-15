import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features1-text21 thq-heading-2">
                    Our Features
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text14 thq-body-small">
                  Discover the amazing features that set us apart from the rest.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features1-text15 thq-heading-3">
                        Intuitive Interface
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text12 thq-body-small">
                        User-friendly interface designed for seamless
                        navigation.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features1-text17 thq-heading-3">
                        Advanced Analytics
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text20 thq-body-small">
                        Gain valuable insights with our advanced analytics
                        tools.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features1-text18 thq-heading-3">
                        Customization Options
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text13 thq-body-small">
                        Tailor the platform to suit your specific needs and
                        preferences.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text16 thq-body-small">
                    Explore Features
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span>
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text19 thq-body-small">
                    Get Started
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Description: undefined,
  feature2ImageAlt: 'Advanced Analytics Image',
  feature3Description: undefined,
  sectionDescription: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  feature1Title: undefined,
  mainAction: undefined,
  feature3ImageAlt: 'Customization Options Image',
  feature1ImageAlt: 'Intuitive Interface Image',
  feature2Title: undefined,
  feature3Title: undefined,
  secondaryAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features1.propTypes = {
  feature1Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  mainAction: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features1
