import React from 'react'
import "./skills.css"
import htmlIcon from "./images/html.png"
import reactIcon from "./images/react.png"
import jsIcon from "./images/js.png"
import cssIcon from "./images/css.png"
import javaIcon from "./images/java.png"

function Skills() {
  return (
    <div className='skills'>
        <div className="skillsContainer">
            <div className="sTitle"><h2>Skills</h2></div>
            <div className="sContainer">



                <div className="skillBox">
                    <div className="sPercentage"><p>98%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${reactIcon})`}} ></div>
                    <div className="sBTop">
                        <h2>HTML</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, rem.</p>
                    </div>
                </div>


                <div className="skillBox">
                    <div className="sPercentage"><p>98%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${jsIcon})`}}></div>
                    <div className="sBTop">
                    <h2>JS</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, rem.</p>                    </div>
                </div>


                <div className="skillBox">
                    <div className="sPercentage"><p>98%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${javaIcon})`}}></div>
                    <div className="sBTop">
                    <h2>JS</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, rem.</p>                    </div>
                </div>

                <div className="skillBox">
                    <div className="sPercentage"><p>98%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${cssIcon})`}}></div>
                    <div className="sBTop">
                    <h2>HTML</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, rem.</p>                    </div>
                </div>

                <div className="skillBox">
                    <div className="sPercentage"><p>98%</p></div>
                    <div className="sBB" style={{backgroundImage: `url(${htmlIcon})`}}></div>
                    <div className="sBTop">
                    <h2>HTML</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, rem.</p>                    </div>
                </div>

    
           

              
            </div>
        </div>
    </div>
  )
}

export default Skills