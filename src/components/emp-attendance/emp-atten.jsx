import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const EmpAtten = ({AttenIcon, AttenTitle, AttenCount, icnBg}) => {
  return (
    <>
    <div className="Atten">
        <div className="Icn">
        <FontAwesomeIcon icon={AttenIcon} style={{
            height: "60%",
            color: icnBg
            // paddingLeft: '10',
        }}/>
        </div>
        <h1>{AttenTitle}</h1>
        <p>{AttenCount}</p>
    </div>
    </>
  )
}

export default EmpAtten