import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './alerts-content.css'

const AlertsContent = (props) => {
    return (
        <div className={`alerts-content-weather-content ${props.rootClassName} `}>
            <div className="alerts-content-row thq-flex-row">
                <h1>
                    {props.heading ?? (
                        <Fragment>
                            <h1 className="alerts-content-text11">
                                <span>Alert</span>
                                <br></br>
                            </h1>
                        </Fragment>
                    )}
                </h1>
                <div className="alerts-content-feature1 thq-flex-column">
                    {props.color ?? (
                        <Fragment>
                            <div className="alerts-content-container1">
                                <img
                                    src="/alert-symbol-200h.png"
                                    alt="Alert Symbol"
                                    className="alerts-content-feature1-image"
                                />
                            </div>
                        </Fragment>
                    )}
                    <div className="alerts-content-container2">
                        <div className="alerts-content-content">
                            <h3>
                                {props.feature2Title ?? (
                                    <Fragment>
                                        <h3 className="alerts-content-text16">
                                            <span>Headline 22 Characters</span>
                                            <br></br>
                                        </h3>
                                    </Fragment>
                                )}
                            </h3>
                            <span>
                                {props.feature2Description ?? (
                                    <Fragment>
                                        <span className="alerts-content-feature2-description5 thq-body-small">
                                            <span>Effective as of: &lt;&gt;</span>
                                            <br></br>
                                        </span>
                                    </Fragment>
                                )}
                            </span>
                            <span>
                                {props.feature2Description1 ?? (
                                    <Fragment>
                                        <span className="alerts-content-feature2-description6 thq-body-small">
                                            <span>Expires as of: &lt;&gt;</span>
                                            <br></br>
                                        </span>
                                    </Fragment>
                                )}
                            </span>
                            <span>
                                {props.feature2Description11 ?? (
                                    <Fragment>
                                        <span className="alerts-content-feature2-description7 thq-body-small">
                                            <span>Instruction: 26 Characters</span>
                                            <br></br>
                                        </span>
                                    </Fragment>
                                )}
                            </span>
                            <span>
                                {props.feature2Description111 ?? (
                                    <Fragment>
                                        <span className="alerts-content-feature2-description8 thq-body-small">
                                            <span>Click for Description</span>
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

AlertsContent.defaultProps = {
    heading: undefined,
    rootClassName: '',
    feature2Description: undefined,
    feature2Title: undefined,
    feature2Description1: undefined,
    feature2Description11: undefined,
    feature2Description111: undefined,
}

AlertsContent.propTypes = {
    heading: PropTypes.element,
    rootClassName: PropTypes.string,
    feature2Description: PropTypes.element,
    feature2Title: PropTypes.element,
    feature2Description1: PropTypes.element,
    feature2Description11: PropTypes.element,
    feature2Description111: PropTypes.element,
}

export default AlertsContent
