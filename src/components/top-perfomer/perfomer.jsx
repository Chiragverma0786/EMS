import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Performer = ({profileIcon, profileName, profileJob, profileTask}) => {
  return (
    <>
    <div className="profile-data">
        <div className="profile-logo">
            <img src={profileIcon} alt="" />
        </div>
        <h1>{profileName}</h1>
        <h2>{profileJob}</h2>
        <p>{profileTask}</p>
    </div>
    </>
  )
}

export default Performer