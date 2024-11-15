import React  from 'react'
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import EmpAtten from '../emp-attendance/emp-atten';
import appPic from '/src/assets/interview.svg';
import profile from '/src/assets/meet5.png'
import profile2 from '/src/assets/meet1.png'
import profile3 from '/src/assets/meet2.png'
import profile4 from '/src/assets/meet3.png'
import profile5 from '/src/assets/meet4.png'
import profile6 from '/src/assets/profile.png'
import profile7 from '/src/assets/dummy1.png'
import { faBan, faChartLine, faChartSimple, faCheckDouble, faCircle, faCircleCheck, faClock, faSheetPlastic, faUmbrellaBeach, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Meetings from '../meetings/meeting';
import Performer from '../top-perfomer/perfomer';

const AdminData = () => {
  return (
    <>
                <div className="admin-inner-container">
                <div className="wrap">
                    <div className="first-container">

                <div className="emp-info">
                    <h1>Employees Info</h1>
                    <div className="emp-info-chart">
                    <Line 
                        style={{
                            width: "100%",
                        }}
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [{
                                label: "EMPLOYEE COUNT",
                                data: [30, 35, 46, 39, 42, 75, 100, 104, 135, 145, 200, 210],
                                backgroundColor: 'orangered',
                                borderColor: 'orangered',
                                pointRadius: 2,
                                pointBackgroundColor: 'orangered',
                                pointHoverRadius: 7,
                                pointHoverBackgroundColor: 'orangered',
                                fill: false, // Fills the area below the line for a smoother appearance
                                tension: 0.4, // Adds smooth curves to the line
                            }],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    grid: {
                                        display: false, // Remove grid lines behind the chart
                                    },
                                },
                                y: {
                                    grid: {
                                        display: false, // Remove grid lines behind the chart
                                    },
                                    ticks: {
                                        display: false, // Hide the Y-axis labels
                                    },
                                    beginAtZero: true,
                                    border: {
                                        display: false, // Hide the Y-axis line
                                    },
                                },
                            },
                            plugins: {
                                legend: {
                                    display: false, // Show legend
                                    position: 'bottom', // Position legend at the top
                                    labels: {
                                        color: 'black', // Set legend label color to black
                                    },
                                },
                                tooltip: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker tooltip background for better contrast
                                    titleColor: 'white', // White title color in tooltip
                                    bodyColor: 'white', // White body text in tooltip
                                    borderColor: 'orangered', // Border color for tooltip
                                    borderWidth: 2,
                                    cornerRadius: 6, // Rounded corners for the tooltip
                                },
                            },
                        }}
                    />
                    </div>
                </div>

                {/* Second Container */}

                <div className="first-cont-2">
                    <div className="second-left">
                        <h2>Employees Availability</h2>
                        <div className="second-left-bottom">
                            <div className="emp1">
                                <EmpAtten AttenIcon={faCircleCheck} AttenTitle={"Attendance"} AttenCount={"180"} icnBg={"green"}/>

                                <EmpAtten AttenIcon={faClock} AttenTitle={"Late Coming"} AttenCount={"18"} icnBg={"red"}/>
                            </div>
                            <div className="emp2">
                            <EmpAtten AttenIcon={faBan} AttenTitle={"Absent"} AttenCount={"35"} icnBg={"orangered"}/>
                            <EmpAtten AttenIcon={faUmbrellaBeach} AttenTitle={"Leave Apply"} AttenCount={"5"}
                            icnBg={'rgb(215, 178, 109)'}/>
                            </div>
                        </div>
                    </div>
                    <div className="second-right">
                        <div className="second-right-top">
                            <h2>Total Employees</h2>
                            <h1>210</h1>
                        </div>

                        <div className="second-right-bottom">
                        <Doughnut
                                style={{
                                    width: '60%',
                                    height: '90%',
                                }}
                                data={{
                                    labels: ['Man', 'Women'],
                                    datasets: [
                                    {
                                        
                                        data: [120, 90],
                                        backgroundColor: [
                                        ' #4158D0', 
                                        'rgb(255, 94, 128)',
                                        ],
                                    },
                                    ],
                                }}
                                options={{
                                    responsive: true,
                                    plugins: {
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                        usePointStyle: true, // This makes the legend items circular
                                        padding: 20, // Adds some spacing between the legend items
                                        },
                                    },
                                    },
                                }}
                                />
                        </div>
                    </div>
                </div>

                <div className="first-cont-3">
                    <h1>Top Hiring Sources</h1>
                    <div className="bar-chart">
                    <Bar
  data={{
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'UI/UX Designer',
        data: [2, 12, 30, 45, 60, 40, 39, 50, 34, 29, 30, 50],
        backgroundColor: 'rgb(78, 82, 131)',
        
      },
      {
        label: 'App Developer',
        data: [4, 15, 33, 23, 45, 47, 39, 58, 34, 50, 60, 45],
        backgroundColor: 'rgb(241, 155, 47)',
        
      },
      {
        label: 'ReactJS Developer',
        data: [7, 15, 30, 34, 45, 20, 30, 70, 34, 69, 50, 46],
        backgroundColor: 'rgb(245, 85, 141)',
        
      },
      {
        label: 'Web Developer',
        data: [2, 12, 34, 14, 5, 20, 24, 40, 34, 54, 50, 42],
        backgroundColor: 'rgb(139, 93, 255)',
        
      }
    ]
  }}
  options={{
    scales: {
      x: {
        stacked: true, // Ensures stacking on the x-axis
        grid: {
            display: false, // Remove grid lines behind the chart
        },
        
      },
      y: {
        stacked: true, // Ensures stacking on the y-axis
        grid: {
            display: false, // Remove grid lines behind the chart
        },
        ticks: {
            display: false, // Hide the Y-axis labels
        },
        beginAtZero: true,
        border: {
            display: false, // Hide the Y-axis line
        },
      }
    }
  }}
/>

                    </div>
                </div>
                
                </div>

                <div className="second-container">
                    <div className="interview-container">
                        <div className="application">
                            <div className="app-left">
                               <div className="app-cont">
                               <FontAwesomeIcon icon={faSheetPlastic} style={{
                                fontSize: 26
                               }} />
                               </div>
                               <h1>1546</h1>
                               <p>Applications</p>
                            </div>
                            <div className="app-right"> 
                                    <img src={appPic} alt="" />
                            </div>
                        </div>
                        <div className="total-interview">
                            <div className="gaga1">
                                <div className="gaga-icon">
                                    <FontAwesomeIcon icon={faUsers} style={{
                                        color: '#fff',
                                        fontSize: 22
                                    }}/>
                                </div>
                                <div className="gaga-detail">
                                    <h1>234</h1>
                                    <p>Interviews</p>
                                </div>
                            </div>
                            <div className="gaga2">
                            <FontAwesomeIcon icon={faChartSimple} style={{
                                        color: '#4158D0',
                                        fontSize: 32
                                    }}/>
                            </div>
                        </div>
                        <div className="hired">
                        <div className="gaga1">
                        <div className="gaga-icon">
                                    <FontAwesomeIcon icon={faCheckDouble} style={{
                                        color: '#fff',
                                        fontSize: 22
                                    }}/>
                                </div>
                                <div className="gaga-detail">
                                    <h1>104</h1>
                                    <p>Hired</p>
                                </div>
                        </div>
                        <div className="gaga2">
                        <FontAwesomeIcon icon={faChartLine} style={{
                                        color: '#4158D0',
                                        fontSize: 32
                                    }}/>
                        </div>
                        </div>

                        <div className="button-inter">
                            <div className="btn-grad">
                                <h2>Check Applications</h2>
                            </div>
                        </div>

                        <div className="upcoming-meetings">
                            <h2>Upcoming Meetings</h2>
                            <div className="meet">
                            <Meetings meetLogo={profile} meetName={'Danish Sharma'} meetJob={'UI/UX Designer'} meetTime={' 1.30 - 1:30'}/>

                            <Meetings meetLogo={profile2} meetName={'Tanisha Mehta'} meetJob={'Web Designer'} meetTime={' 1.30 - 1:30'}/>

                            <Meetings meetLogo={profile4} meetName={'Kamal Kumar'} meetJob={'Web Developer'} meetTime={' 1.30 - 1:30'}/>

                            <Meetings meetLogo={profile3} meetName={'Divya Sahota'} meetJob={'CEO Microsoft'} meetTime={' 1.30 - 1:30'}/>

                            <Meetings meetLogo={profile5} meetName={'Payal Malhotra'} meetJob={'MERN Developer'} meetTime={' 1.30 - 1:30'}/>

                            <Meetings meetLogo={profile6} meetName={'Simon Rock'} meetJob={'ReactJS Developer'} meetTime={' 1.30 - 1:30'}/>

                            <Meetings meetLogo={profile4} meetName={'Varun Verma'} meetJob={'App Developer'} meetTime={' 1.30 - 1:30'}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="bottom-container">
                    <h1>Top Performers</h1>
                    <p>You have 140 influencers in your company.</p>
                    <div className="category">
                        <div className="top-one">
                                    <Performer profileIcon={profile} profileName={"Rishi Kumar"}  profileJob={'UI/UX Designer'} profileTask={'90%'}/>
                                    <Performer profileIcon={profile4} profileName={"Rahul Soni"}  profileJob={'Web Designer'} profileTask={'82%'}/>
                                    <Performer profileIcon={profile2} profileName={"Bhumi Verma"}  profileJob={'ReactJS Developer'} profileTask={'78%'}/>
                        </div>
                        <div className="bottom-one">
                            <Performer profileIcon={profile3}    profileName={"Yashika Verma"}  profileJob={'Web Developer'} profileTask={'75%'}/>
                            <Performer profileIcon={profile5} profileName={"Varun Verma"}  profileJob={'MERN Stack'} profileTask={'70%'}/>
                            <Performer profileIcon={profile6} profileName={"Sahil Deva"}  profileJob={'Laravel Developer'} profileTask={'70%'}/>
                        </div>
                    </div>
                </div>

                </div>   
    </>
    
  )
}

export default AdminData