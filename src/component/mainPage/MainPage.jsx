import React, { useState } from 'react'
import "./door.css"

function MainPage() {

  const [cvOn, setCvOn] = useState(false)

  const handleCvOn =()=>{
    setCvOn(!cvOn)
  }
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
                <div onClick={handleCvOn} className='manBtns'>CV</div>
              </div>
              <a href="#projectsId" className="manBtns">Projects</a>
          </div>
          <div className={cvOn? "CvChoice comeToscreen" : "CvChoice"}>
            <a href='https://drive.google.com/file/d/1vs3c4i-c5_5CyKiLCp5oqFBOmj6c4W3B/view?usp=drive_link' className="cvlang">CV - NL</a>
            <a href='https://drive.google.com/file/d/1IBgp7S6pLebvMbYdDh5bjuZNRRsUQwwt/view?usp=drive_link' className="cvlang">CV - ENG</a>
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