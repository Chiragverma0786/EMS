import React, { useState } from 'react'
import './dashicon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dashicon = ({noactive, 
    bgColorNew, 
    active, 
    dashIcon, 
    DashboardName, 
    nameCut, 
    fullWidth, 
    optionOne,
    optionTwo,
    dashboardLoad1,
    dashboardLoad2
    
    }) => {
    const [openMain, setOpenMain] = useState("none")

    const openDiv = ()=>{
        if(openMain === "none"){
            setOpenMain("flex")
        }

        else{
            setOpenMain("none")
        }
    }
  return (
    <>
    <div onClick={active} className="Dash-icon" id={noactive}>
        <div className="all-dash" style={{
            backgroundColor: bgColorNew
        }}>
        <div className="icon-logo" style={{
            width: fullWidth
        }}>
        <FontAwesomeIcon icon={dashIcon} />
        </div>
        <div onClick={openDiv} className="icon-name" style={{
            display: nameCut
        }}>
            <h2>{DashboardName}</h2>
            <span><FontAwesomeIcon icon={faChevronDown} /></span>
        </div>
        </div>

        <div className="options" style={{
            display: openMain
        }}>
            <div className="option1">
            <a href={dashboardLoad1}><h2>{optionOne}</h2></a>
            </div>
            <div className="option1">
            <a href={dashboardLoad2}><h2>{optionTwo}</h2></a>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Dashicon