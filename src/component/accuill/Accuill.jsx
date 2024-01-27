import React, { useState } from 'react'
import "./accuil.css"
import mainCrc from "./images/accuilgril.png"
import AboutMe from '../aboutme/AboutMe'
function Accuill({showThis}) {
  const [showThisPage,setShowThisPage] = useState(false)

  if(showThis===true){
      setInterval(()=>{
          setShowThisPage(true)
      },300)
  }
  return (
    <div className={showThisPage? "accuil accuilTransition": "accuil" }>
        <div className="accuilBody">
            <div className="rightAccuil">
              <div className="wrapper">
                <div className="itmes" > <a href="#aboutmeComp">About Me</a> </div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
                <div className="itmes"><a href="#aboutmeComp">About Me</a></div>
              </div>
            </div>
            <div className="leftAccuil">
                <p>YOU CAN FIND EVERYTHING ABOUT AZAD HERE</p>
                <div className="imgdiv">
                  <img src={mainCrc} alt="" />

                </div>
            </div>
        </div>
      <AboutMe id="aboutmeComp" />
    </div>
  )
}

export default Accuill