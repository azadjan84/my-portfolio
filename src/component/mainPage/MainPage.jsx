import React, { useState } from 'react'
import "./door.css"

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
          <div className="cvAndProject">
              <div className="manBtns cv">
                <a href='https://drive.google.com/file/d/1IBgp7S6pLebvMbYdDh5bjuZNRRsUQwwt/view?usp=drive_link'  className='manBtns'>CV</a>
              </div>
              <a href="#projectsId" className="manBtns">Projects</a>
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