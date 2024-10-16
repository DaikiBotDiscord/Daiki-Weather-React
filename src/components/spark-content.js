import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './spark-content.css'

const SparkContent = (props) => {
    return (
        <div className={`spark-content-weather-content ${props.rootClassName} `}>
            <div className="spark-content-row thq-flex-row">
                <h1>
                    {props.heading ?? (
                        <Fragment>
                            <h1 className="spark-content-text11">
                                <span>Lightning</span>
                                <br></br>
                            </h1>
                        </Fragment>
                    )}
                </h1>
                <div className="spark-content-feature1 thq-flex-column">
                    <div className="spark-content-container1">
                        <img
                            alt={props.feature1ImageAlt}
                            src={props.feature1ImageSrc}
                            className="spark-content-feature1-image"
                        />
                    </div>
                    <div className="spark-content-container2">
                        <div className="spark-content-content">
                            <span>
                                {props.feature2Description ?? (
                                    <Fragment>
                                        <span className="spark-content-feature2-description3 thq-body-small">
                                            <span>Closest Strike in</span>
                                            <br></br>
                                            <span>30 Minutes:</span>
                                            <br></br>
                                        </span>
                                    </Fragment>
                                )}
                            </span>
                            <h3>
                                {props.feature2Title ?? (
                                    <Fragment>
                                        <h3 className="spark-content-text14">
                                            <span>## Miles</span>
                                            <br></br>
                                        </h3>
                                    </Fragment>
                                )}
                            </h3>
                        </div>
                        <div className="spark-content-container3"></div>
                        <div className="spark-content-container4">
                            <span>
                                {props.feature2Description82 ?? (
                                    <Fragment>
                                        <span className="spark-content-feature2-description4 thq-body-small">
                                            <span>Short Lightning</span>
                                            <br></br>
                                            <span>Message</span>
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

SparkContent.defaultProps = {
    heading: undefined,
    feature1ImageSrc: '/spark-200h.png',
    feature1ImageAlt: 'Spark Image',
    feature2Title: undefined,
    feature2Description: undefined,
    feature2Description82: undefined,
    rootClassName: '',
}

SparkContent.propTypes = {
    heading: PropTypes.element,
    feature1ImageSrc: PropTypes.string,
    feature1ImageAlt: PropTypes.string,
    feature2Title: PropTypes.element,
    feature2Description: PropTypes.element,
    feature2Description82: PropTypes.element,
    rootClassName: PropTypes.string,
}

export default SparkContent
