import React, { useState } from 'react'
import "./language.css"
import langueData from './data'
function Language() {
    const [startOn, setStartOn] = useState()

  return (
    <div className='language'> 
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