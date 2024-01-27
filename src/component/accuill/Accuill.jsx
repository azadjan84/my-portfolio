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
            <div className="aboutmeBody">
            <div className="aboutLeft">
              <div className="aboutLL">
                <div className="floorF">
                  <div className="box"><div className="box"><a href="#aboutmeComp">About Me</a></div></div>
                  <div className="box"><div className="box"><a href="">Projects</a></div></div>
                  <div className="box"><div className="box"><a href="">Skills</a></div></div>
                  <div className="box"><div className="box"><a href="">Experiances</a></div></div>
                </div>
                <div className="floorS">
                <div className="box"><div className="box"><a href="">Hobby</a></div></div>
                  <div className="box"><div className="box"><a href="">Free Time</a></div></div>
                  <div className="box"><div className="box"><a href="">Values</a></div></div>
                  <div className="box"><div className="box"><a href="">Photos</a></div></div>
                </div>
                <div className="floorT">
                <div className="box"><div className="box"><a href="">Skills</a></div></div>
                  <div className="box"><div className="box"><a href="">LinkedIn</a></div></div>
                  <div className="box"><div className="box"><a href="">Gitub</a></div></div>
                  <div className="box"><div className="box"><a href="">Contact</a></div></div>
                </div>
              </div>
            </div>
            <div className="aboutRight">
              <p>YOU CAN FIND EVERYTHING</p>
              <div className="personImg">
                <img src={mainCrc} alt="" />
              </div>
            </div>

        </div>
      <AboutMe id="aboutmeComp" />
    </div>
  )
}

export default Accuill