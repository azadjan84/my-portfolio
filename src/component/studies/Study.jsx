import React from 'react'
import "./study.css"
import coding from "./images/coding.jpg"
import codeing from "./images/coding.jpg"
import psy from "./images/psy.jpg"
import accounting from "./images/accounting.jpg"

function Study() {
  return (
    <div className='study'>
        <div className="studyContainer">
            <div className="sTop">
                <p>Education</p>
            </div>


            <div className="sBtm">
                <div className="sBtmContainer">
                    <div className="box">
                        <div className="card">
                            <div className="sImg">
                                <img src={codeing} alt="" />
                            </div>
                            <div className="sDesc">
                                
                                <div className="edTitle"><p>JUNIOR WEB DEVELOPER</p></div>
                                <div className="date"><p>08/2021 - 03/2022</p></div>
                                <div className="date"><p>BECODE - BRUSSELS</p></div>
                                <div className="date"><p>Becode is an IT bootcamp based on active peer-to-peer pedagogy </p></div>
                            </div>
                        </div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Study