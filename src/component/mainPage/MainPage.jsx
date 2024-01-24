import React, { useState } from 'react'
import "./door.css"
import leftDoor from "../../images/left.jpg"
import righDoor from "../../images/right.jpg"
import wlcpic from "../../images/wlcs.jpg"

function MainPage() {

  const [isOpen, setIsOpen] = useState(false);
  setInterval(()=>{
      setIsOpen(true)
  },1000)

  return (
    <div className='mainPage'>
      <div className="door">
          <div className={`leftdoor ${isOpen? "open" :""}`} >
              <img src={leftDoor} alt="" style={{
                 resizeMode: 'cover',
                 height: "100%",
                 width: "100%",

              }}   />
          </div>
          <div className={`rightdoor ${isOpen? 'open1' :''}`}>
          <img src={righDoor}  style={{
            resizeMode: 'cover',
            height: "100%",
            width: "100%",
          }} alt="" />
          </div>
      </div>
      
      <div className="receip">

        <div className="recepPerson">
          <img style={{
            resizeMode:'cover',
            width:'700px',
            height:'700px'
          }} src={wlcpic} alt="not" />
        </div>
      </div>



        
       
    </div>
  )
}

export default MainPage