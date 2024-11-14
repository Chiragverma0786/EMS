import React from 'react'
import profile from '/src/assets/meet5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Meetings = ({meetLogo, meetName, meetJob, meetTime}) => {
  return (
    <>
    <div className="meet-div">
        <div className="sirf1">
        <div className="meet-logo">
            <img src={meetLogo} alt="" />
        </div>
        <div className="meet-data">
            <h1>{meetName}</h1>
            <p>{meetJob}</p>
        </div>
        </div>
        <div className="sirf2">
        <div className="meet-time">
            <FontAwesomeIcon icon={faClock} /><h2>{meetTime}</h2>
        </div>
        </div>    </div>
    </>
  )
}

export default Meetings