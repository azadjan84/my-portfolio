import React from 'react'
import "./main.css"
import myImg from "../../images/me.png"

function MainPage() {
  return (
    <div className='mainPage'> 
        <div className='rightSide'>
            <div className="rsr">
              <div className="itsme">It's me</div>
              <div className="myname">AZAD FARID</div>
              <div className="myPassion">WEB DEVELOPER</div>
              <p className="aboutMe">Team player, detail-oriented, sociable, always eager to improve my professional and interpersonal skills, consistently responsible for my work and tasks. I possess a talent for coming up with solutions for challenges.</p>
            </div>
            <div className="rsl">
              <div className="rslItems">

              </div>
            </div>
        </div>

        <div className='leftSide'>
           <img src={myImg} alt="No photo" />
        </div>
    </div>
  )
}

export default MainPage