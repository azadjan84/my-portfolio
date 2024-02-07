import React, { useRef, useState } from 'react'
import "../mainPage/door.css"
import "./menu.css"
import { ScrollLink } from 'react-scroll'
import NotBuild from '../notBuild/NotBuild'
function Menu() {

  const [notBuildPage, setNotBuildPage] = useState(true)
  const goToNotBuildPage=()=>{
    setNotBuildPage(true)
  }


  return (
    <div className='menu' id='menuId' >
       {notBuildPage ? <NotBuild setNotBuildPage={setNotBuildPage} /> : 
       <div className="meunBody">
       <div className="mLeft">
           <div className="menuContainer">
               <div className="fFloor">
               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">About me</a>
               <a  href="#projects"  className="mBox"> Projects</a>
               <a  href="#skills" className="mBox">Skills</a>
               <a  href="#experianceId" className="mBox">Experiances</a>
               </div>
               <div className="sFloor">
               <a  href="#educationId" className="mBox">Education</a>
               <a onClick={goToNotBuildPage}  href="#aboutmeComp" className="mBox">Algorithm</a>
               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">Hobby</a>
               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">Values</a>
               </div>
               <div className="tFloor">

               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">Language</a>
               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">My Quotes </a>
               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">Contact</a>
               <a onClick={goToNotBuildPage} href="#aboutmeComp" className="mBox">This Portfolio</a>
               </div>
           </div>
           
       </div>
       <div className="mRight">
             <div className="mRt">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
             </div>
             <div className="mRm">
               <div className="pics"></div>
             </div>
             <div className="mRb">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
             </div>
       </div>
   </div>
       
       
       }
        
    </div>
  )
}

export default Menu