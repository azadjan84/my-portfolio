import React, { useState } from 'react'
import "./door.css"
import leftDoor from "../../images/left.jpg"
import righDoor from "../../images/right.jpg"
import wlcpic from "../../images/wlc.png"
import wlcText from "../../images/wlcs.png"
import Accuill from '../accuill/Accuill'

function MainPage() {

  const [isOpen, setIsOpen] = useState(false);
  const [sayWlc, setSayWlc ] = useState(true)
  const [accuil, setAccuil] = useState(false)
  const [accuilTrans, setAcuillTrans] = useState(false)

  setInterval(()=>{
      setIsOpen(true)
    },1000)
  if(isOpen == true){
    setInterval(()=> {
      setSayWlc(false)
      setAccuil(true)
    },3000)
  }
  if(isOpen == true){
    
    setInterval(()=>{
      setAcuillTrans(true)
      
    },3200)
    
  }
  return (
    <div className='mainPage'>
      <div className="door">
          <div className={`leftdoor ${isOpen? "open" :""} ${accuil? "receipNone":""}`}  >
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
      
      <div className={`receip ${sayWlc? "" : "receipAnimantion"} ${accuilTrans? "receipNone" :""}`} >

      
        <div className="recepPerson">
          <img style={{
            resizeMode:'cover',
            width:'700px',
            height:'700px'
          }} src={wlcpic} alt="not" />
          <div className="wlcText">
            <img src={wlcText} alt="" />
          </div>
        </div>
         
      </div>
      {accuil? <Accuill showThis={accuilTrans} /> : "" }



        
       
    </div>
  )
}

export default MainPage