import React, { useRef, useState } from 'react'
import "../mainPage/door.css"
import "./menu.css"
import { ScrollLink } from 'react-scroll'
import NotBuild from '../notBuild/NotBuild'
import AboutMe from '../aboutme/AboutMe'
import Quotes from '../menuItems/myQuotes/Quotes'
import Language from '../menuItems/language/Language'
import ThisPortofilio from '../menuItems/thisPortfoliio/ThisPortofilio'
function Menu() {

  const [notBuildPage, setNotBuildPage] = useState(false)
  const [pageId, setPageId]= useState(0);
  const goToNotBuildPage=(id)=>{
    setNotBuildPage(true)
    setPageId(id);
  }


  return (
    <div className='menu' id='menuId' >
       {notBuildPage && pageId ==7 ? <ThisPortofilio setNotBuildPage={setNotBuildPage} /> :  notBuildPage && pageId ==1 ? <AboutMe setNotBuildPage={setNotBuildPage} />: notBuildPage && pageId ==5 ? <Language setNotBuildPage={setNotBuildPage} />: notBuildPage && pageId ==6 ?<Quotes setNotBuildPage={setNotBuildPage} />  : notBuildPage ? <NotBuild setNotBuildPage={setNotBuildPage} /> : 
       <div className="meunBody">
       <div className="mLeft">
           <div className="menuContainer">
               <div className="fFloor">
               <a onClick={()=> goToNotBuildPage(1) } href="#aboutmeComp" className="mBox">About me</a>
               <a  href="#projects"  className="mBox"> Projects</a>
               <a  href="#skills" className="mBox">Skills</a>
               <a  href="#experianceId" className="mBox">Experiences</a>
               </div>
               <div className="sFloor">
               <a  href="#educationId" className="mBox">Education</a>
               <a   href="https://drive.google.com/file/d/1IBgp7S6pLebvMbYdDh5bjuZNRRsUQwwt/view?usp=drive_link" title='private' className="mBox">CV - ENG</a>
               <a href="https://drive.google.com/file/d/1vs3c4i-c5_5CyKiLCp5oqFBOmj6c4W3B/view?usp=drive_link" title='private' className="mBox">CV - NL</a>
               <a  href="#aboutmeComp" title='private' className="mBox diableOn">Values</a>
               </div>
               <div className="tFloor">

               <a onClick={()=> goToNotBuildPage(5) } href="#aboutmeComp" title='private' className="mBox">Language</a>
               <a onClick={()=> goToNotBuildPage(6) } href="#aboutmeComp" className="mBox">My Quotes </a>
                <a href="#footerId" className="mBox"  >Contact</a>
              <a  onClick={()=>setNotBuildPage(7)} href='' title='private' className="mBox">This Portfolio</a>
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