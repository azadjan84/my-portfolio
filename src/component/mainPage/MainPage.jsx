import React, { useState } from 'react'
import "./door.css"
import me1 from "./images/me1.jpg"
import me2 from "./images/me2.jpg"
import me3 from "./images/me3.jpg"


function MainPage() {
  return (
    <div className='mainPage'>
        <div className="mainLeft">
          <div className="titleText">
            <p>PORTFOLIO</p>
          </div>
          <div className="myName">
            <p>AZAD</p>
            <p>FARID</p>
          </div>
          <div className="jobTitle">
            <p>DEVELOPER</p>
          </div>
        </div>
        <div className="mainRight">
          <div className="mrT">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="mrM">
            <div className="profilePic">

            </div>
          </div>
          <div className="mrB">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
    </div>
  )
}

export default MainPage