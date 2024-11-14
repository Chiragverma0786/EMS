import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleHalfStroke, faHandshake, faHouse, faListCheck, faMoneyBill, faPeopleGroup, faRightLong, faSearch, faSheetPlastic, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import profile from '/src/assets/meet5.png'
import Dashicon from '../components/dashicon/dashicon'
import { faSellsy } from '@fortawesome/free-brands-svg-icons'
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import AdminData from '../components/admin-data/admin-data'

const AdminDash = () => {
    const [first, setfirst] = useState("6%")
    const [display, displayset] = useState("none")
    const [border, borderset] = useState("0px")
    const [bgColor, bgset] = useState("#4158D0")
    const [rightWidth, setRightWidth] = useState("100%")
    const [rotateBack, setRotateBack] = useState("0deg")
    // const [abkabg, setabkabg] = useState("transparent")
    const [abhoga, setabHoga] = useState("noactive")
    const [activeIndex, setActiveIndex] = useState(null);
    const [cutName, setCutName] = useState("none");
    const [widthOf, setwidthOf] = useState("100%")
    const[fullLeft, setFullLeft] = useState("-100%")


    const hello =() =>{
        if(first == "6%"){
            setfirst("30%")
            displayset("flex")
            borderset("40px")
            bgset("linear-gradient(to left, #fff 50%, rgb(65, 88, 208) 50%)")
            setRightWidth("30%")
            setRotateBack("180deg")
            setCutName("flex")
            setwidthOf("40px")
        }

        else{
            setfirst("6%")
            displayset("none")
            borderset("0px")
            bgset("#4158D0")
            setRightWidth("100%")
            setRotateBack("0deg")
            setCutName("none")
            setwidthOf("100%")
        }
    }

    const openMobileNav = ()=>{
        if(fullLeft == "-100%"){
            setFullLeft("0%")
        }
        else{
            setFullLeft("-100%")
        }
    }
  return (
    <>
    <div className="admin-body">
        <div className="mobile-bar" style={{
            left: fullLeft
        }}>
            <div className="mobile-header">
                <h2>EMS</h2>
                <span onClick={openMobileNav}>X</span>
            </div>
            <div className="mobile-nav">
            <Dashicon  dashIcon={faHouse} DashboardName={"Dashboard"}
                optionOne={"Admin Dashboard"} optionTwo={"Deals Dashboard"}/>
                        <Dashicon  dashIcon={faSheetPlastic} DashboardName={"Projects"}
                     optionOne={"Web Dev Projects"} optionTwo={"App Dev Projects"}/>

                        <Dashicon noactive={abhoga} dashIcon={faListCheck} DashboardName={"Tasks"} optionOne={"Add Task"} optionTwo={"Task Dashboard"}/>

                        <Dashicon noactive={abhoga} dashIcon={faUsers} DashboardName={"Client"} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faUser} DashboardName={"Employees"} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faMoneyBill} DashboardName={"Payroll"} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faUserPlus} DashboardName={"Add Employee"}  optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faSellsy} DashboardName={"Sales"} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faHandshake} DashboardName={"Deals"} optionOne={"HR"} optionTwo={"Employee"}/>
            </div>
        </div>

        <div className="header">
            <div className="header-left">
                <div className="bar">
                    <FontAwesomeIcon onClick={openMobileNav} icon={faBars} style={{
                        fontSize: 30
                    }}/>
                </div>
            <h1>EMS BY CHIRAG</h1>
            <div className="search">
                <FontAwesomeIcon icon={faSearch} />
                <input type="search" />
            </div>
            </div>

            <div className="header-right">
                <div className="mode">
                <FontAwesomeIcon icon={faCircleHalfStroke} style={{
                    fontSize: 22
                }}/>
                </div>
                <div className="bell">
                <FontAwesomeIcon icon={faBell} style={{
                    fontSize: 22
                }}/>
                </div>
            </div>
            <div className="profile">
                <img src={profile} alt="" />
            </div>
        </div>

        <div className="admin-container">
            <div className="dash" style={{
                width: first,
                background: bgColor
            }}>
                <div className="slider">
                    <div className='right-sign' style={{
                        width: rightWidth
                    }} onClick={hello}>
                        <FontAwesomeIcon icon={faRightLong} style={{
                            fontSize:30,
                            cursor: 'pointer',
                            rotate: rotateBack,
                            
                        }}/>
                    </div>
                    <div className="open-slider-up" style={{
                    display: display
                }}></div>
                </div>
                <div className="dash-bar" style={{
                    borderTopRightRadius: border,
                    borderBottomRightRadius: border
                }}>
                    <div className="dash-nav">
                        <Dashicon noactive={abhoga} dashIcon={faHouse} DashboardName={"Dashboard"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"Admin Dashboard"} optionTwo={"Deals Dashboard"} dashboardLoad1={""} dashboardLoad2={""}/>

                        <Dashicon noactive={abhoga} dashIcon={faSheetPlastic} DashboardName={"Projects"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"Web Dev Projects"} optionTwo={"App Dev Projects"}/>

                        <Dashicon noactive={abhoga} dashIcon={faListCheck} DashboardName={"Tasks"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"Add Task"} optionTwo={"Task Dashboard"}/>

                        <Dashicon noactive={abhoga} dashIcon={faUsers} DashboardName={"Client"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faUser} DashboardName={"Employees"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faMoneyBill} DashboardName={"Payroll"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faUserPlus} DashboardName={"Add Employee"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faSellsy} DashboardName={"Sales"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"HR"} optionTwo={"Employee"}/>

                        <Dashicon noactive={abhoga} dashIcon={faHandshake} DashboardName={"Deals"} nameCut={cutName}
                        fullWidth={widthOf} optionOne={"HR"} optionTwo={"Employee"}/>
                    </div>

                </div>
                <div className="dash-bottom">
                <div className="open-slider-down" style={{
                    display: display
                }}></div>
                </div>
            </div>
            <div className="admin">
            <AdminData />
            </div>
        </div>
        
        </div>
    </>
  )
}

export default AdminDash