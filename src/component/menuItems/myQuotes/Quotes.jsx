import React, { useState } from 'react'
import "./quotes.css"
import leftIcon from "./images/left.png"
import rightIcon from "./images/right.png"
import redFlower from "./images/redFlower.jpg"
function Quotes({setNotBuildPage}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const quotesData = [
        {quot :"Your difference is your strength, not your weakness.", quotImg:redFlower},
        {quot :"Being a foreigner, I need to demonstrate my capabilities twice as much.", quotImg:redFlower}
    ]

    const backMark = "<"
    const goBackFun =()=>{
        setNotBuildPage(false)
      }

  return (
    <div className='quotes'>
        <div className="backmark" onClick={()=>goBackFun()} > {backMark} Back </div>
        <div className="quotesContainer">
            <div className="quotesBox"> 
            <button className='leftBtn'> <img src={rightIcon} alt="" /> {leftIcon} </button>
            <button className='rightBtn'> <img src={leftIcon} alt="" />  </button>
              <div className="quot" >
                    <div className="quoteCenter">
                    <img src={quotesData[0].quotImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quotes