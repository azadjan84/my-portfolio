import React, { useRef } from 'react'
import "../mainPage/door.css"
import "./menu.css"
import { ScrollLink } from 'react-scroll'
function Menu() {


  return (
    <div className='menu' >
        <div className="meunBody">
            <div className="mLeft">
                <div className="menuContainer">
                    <div className="fFloor">
                    <a  href="#aboutmeComp" className="mBox">About me</a>
                    <a  href="#projects"  className="mBox"> Projects</a>
                    <a  href="#skills" className="mBox">Skills</a>
                    <a  href="#aboutmeComp" className="mBox">Experiances</a>
                    </div>
                    <div className="sFloor">
                    <a  href="#aboutmeComp" className="mBox">About me</a>
                    <a  href="#aboutmeComp" className="mBox"> Projects</a>
                    <a  href="#aboutmeComp" className="mBox">Skills</a>
                    <a  href="#aboutmeComp" className="mBox">Experiances</a>
                    </div>
                    <div className="tFloor">

                    <a  href="#aboutmeComp" className="mBox">About me</a>
                    <a  href="#aboutmeComp" className="mBox"> Projects</a>
                    <a  href="#aboutmeComp" className="mBox">Skills</a>
                    <a  href="#aboutmeComp" className="mBox">Experiances</a>
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
    </div>
  )
}

export default Menu