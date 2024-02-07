import React from 'react'
import "./study.css"
import coding from "./images/coding.jpg"
import codeing from "./images/coding.jpg"
import psy from "./images/psy.jpg"
import accounting from "./images/accounting.jpg"

function Study() {
  return (
    <div className='study' id='educationId'>
        <a className='menuId' href="#menuId">Go back to menu</a>
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
                                <div className="date"><p>(9 Months) 01/2022 - 09/2022</p></div>
                                <div className="date"><p> <a href="https://becode.org/">BECODE</a>  - BRUSSELS</p></div>
                                <div className="date"><p>Becode is an IT bootcamp based on active peer-to-peer pedagogy </p></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sImg">
                                <img src={accounting} alt="" />
                            </div>
                            <div className="sDesc">
                                
                                <div className="edTitle"><p> DIPLOMA TECHNICAL, QUALIFICATION - ACCOUNTING OPTION</p></div>
                                <div className="date"><p> (3 year program) 2017 - 2020</p></div>
                                <div className="date"><p>BRUSSELS</p></div>
                                <div className="date"><p> <a href="http://www.cs-em.be/">EPERONNIERS-MERCELIS SCHOOL CENTER</a></p></div>
                                <div className="date"><p>Organize primary and secondary education, including technical and vocational qualifications (full-time and apprenticeship training). </p></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sImg">
                                <img src={psy} alt="" />
                            </div>
                            <div className="sDesc">
                                
                                <div className="edTitle"><p>SELF-DIRECTED LEARNING THROUGH <a style={{color:"white"}} href="https://drholakouee.com/">ONLINE PODCASTS</a> </p></div>
                                <div className="date"><p>(1Year) 2018 - 2019</p></div>
                                <div className="date"><p> BRUSSELS</p></div>
                                <div className="date"><p>Psychology, Daily Life, Adaptability Integration. </p></div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Study