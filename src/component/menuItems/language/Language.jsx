import React, { useState } from 'react'
import "./language.css"
import langueData from './data'
import xBtn from "../../myprojects/slides/images/x.png"
function Language({setNotBuildPage}) {

    const handleBuildPage =()=>{
        setNotBuildPage(false)
    }

  return (
    <div className='language'> 

        <div onClick={handleBuildPage} className="LancloseBtn"><img  src={xBtn} alt="" /></div>  
        <div className="languageBody">
            <div className="langContainer">
                <div className="langTop">
                    <h2>Language</h2>
                    <div className='langLine'></div>
                </div>
                <div className="langBtm">
                    {langueData.map((item, index)=>(
                        <div key={index} className="langdiv">
                            <div className="langDivleft">
                                <h3>{item.langName}</h3>
                                <p>{item.levelName} </p>
                            </div>
                            <div className="levelStart">
                                {[1,2,3,4,5,6,7].map((s,i) =>( 
                                    <div className={i< item.talkingLevl? "star starOn" : "star"} >  </div>
                                                                ))  }
                                
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Language