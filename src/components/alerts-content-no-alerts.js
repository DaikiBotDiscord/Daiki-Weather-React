import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './alerts-content-no-alerts.css'

const AlertsContentNoAlerts = (props) => {
    return (
        <div className="alerts-content-no-alerts-weather-content">
            <div className="alerts-content-no-alerts-row thq-flex-row">
                <h1>
                    {props.heading ?? (
                        <Fragment>
                            <h1 className="alerts-content-no-alerts-text2">
                                <span>Alert</span>
                                <br></br>
                            </h1>
                        </Fragment>
                    )}
                </h1>
                <div className="alerts-content-no-alerts-feature1 thq-flex-column">
                    <div className="alerts-content-no-alerts-container1">
                        <img
                            src="/alert-symbol-200h.png"
                            alt="Alert Symbol"
                            className="alerts-content-no-alerts-feature1-image"
                        />
                    </div>
                    <div className="alerts-content-no-alerts-container2">
                        <div className="alerts-content-no-alerts-content">
                            <h3>
                                {props.feature2Title ?? (
                                    <Fragment>
                                        <h3 className="alerts-content-no-alerts-text5">
                                            <span>No Active Alerts</span>
                                            <br></br>
                                        </h3>
                                    </Fragment>
                                )}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AlertsContentNoAlerts.defaultProps = {
    rootClassName: '',
    heading: undefined,
    feature2Title: undefined,
}

AlertsContentNoAlerts.propTypes = {
    rootClassName: PropTypes.string,
    heading: PropTypes.element,
    feature2Title: PropTypes.element,
}

export default AlertsContentNoAlerts
