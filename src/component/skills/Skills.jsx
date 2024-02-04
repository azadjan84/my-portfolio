import React, { useRef } from 'react'
import "./skills.css"
import htmlIcon from "./images/html.png"
import reactIcon from "./images/react.png"
import jsIcon from "./images/js.png"
import cssIcon from "./images/css.png"
import javaIcon from "./images/java.png"
import mysqlgIcon from "./images/mysql.png"




function Skills() {


  return (
    <div className='skills' id='skills'>
        <div className="skillsContainer">
            <div className="sTitle"><h2>Skills</h2></div>
            <div className="sContainer">
                <div className="skillBox">
                    <div className="sPercentage" style={{borderColor:"#61DAFB",
                     borderBlockEndWidth: "5px", backgroundColor:"#7ea0aa"  }}><p style={{color:"#61DAFB", fontWeight:"bold"}}>80%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${reactIcon})`}} ></div>
                    <div className="sBTop">
                        <h2>React JS</h2>
                            <p>Routing, State Management, Hooks, Form Handling, Component Reusability, AJAX Requests, Animations  .</p>
                    </div>
                </div>


                <div className="skillBox">
                <div className="sPercentage" style={{borderColor:"#F7DF1E",
                     borderBlockEndWidth: "5px", backgroundColor:"#bbb47f" }}><p style={{color:"#F7DF1E", fontWeight:"bold"}} >80%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${jsIcon})`}}></div>
                    <div className="sBTop">
                    <h2>JavaScript</h2>
                        <p>DOM Manipulation, Promises and Fetch API, Event Handling, Asynchronous Programming, Dynamic Styling.</p>                    </div>
                </div>


                <div className="skillBox">
                <div className="sPercentage" style={{borderColor:"#FF5722",
                     borderBlockEndWidth: "5px", backgroundColor:"#e6bdb0"  }}><p style={{color:"#FF5722", fontWeight:"bold"}} >50%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${javaIcon})`}}></div>
                    <div className="sBTop">
                    <h2>Java</h2>
                        <p> Java syntax, Build Small Tools, Build applications with graphical interfaces Handle Data,  .</p>                    </div>
                </div>

                <div className="skillBox">
                <div className="sPercentage" style={{borderColor:"#1572B6",
                     borderBlockEndWidth: "5px", backgroundColor:"#b8cddb"  }}><p style={{color:"#1572B6", fontWeight:"bold"}} >90%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${cssIcon})`}}></div>
                    <div className="sBTop">
                    <h2>CSS</h2>
                        <p>Properties and Values, Flexbox, Grid Layout, Transitions and Animations, Responsive Design  </p>                    </div>
                </div>

                <div className="skillBox">
                <div className="sPercentage" style={{borderColor:"#E44D26",
                     borderBlockEndWidth: "5px", backgroundColor:"#e0b2a7"  }}><p style={{color:"#E44D26", fontWeight:"bold"}}>90%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${htmlIcon})`}}></div>
                    <div className="sBTop">
                    <h2>HTML</h2>
                        <p>HTML Document Structure, Lists, Links, Images, Forms, Divisions</p>                    </div>
                </div>

                <div className="skillBox">
                    <div className="sPercentage" 
                        style={{borderColor:"#00758F",
                        borderBlockEndWidth: "5px", backgroundColor:"#abd8e2"  }}
                    ><p style={{color:"#00758F", fontWeight:"bold"}}>50%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${mysqlgIcon})`}}></div>
                    <div className="sBTop">
                    <h2>MySQL</h2>
                        <p>Database and Table Creation, Inserting Data, Selecting Data, Updating Data, Deleting Data, Querying with Conditions, Joins .</p>                    </div>
                </div>

    
           

              
            </div>
        </div>
    </div>
  )
}

export default Skills