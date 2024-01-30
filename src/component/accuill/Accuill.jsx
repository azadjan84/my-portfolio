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
                  <a  href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">About Me</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Projects</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Skills</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Experiances</a></div></a>
                </div>
                <div className="floorS">
                <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Hobby</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Free Time</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Values</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Photos</a></div></a>
                </div>
                <div className="floorT">
                <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Skills</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">LinkedIn</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Gitub</a></div></a>
                  <a href="#aboutmeComp" className="box"><div className="box"><a href="#aboutmeComp">Contact</a></div></a>
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