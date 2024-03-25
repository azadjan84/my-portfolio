import React, { useState } from 'react'
import "./quotes.css"
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
            <div className="qcdiv"> <p>"Your difference is your strength, not your weakness."</p> </div>
            <div className="qcdiv"> <p>"If I were to switch places with a friend for a week to observe my communication skills, emotional intelligence, and professional development from an external perspective, it could provide valuable insights for growth."</p> </div>
            <div className="qcdiv"> <p>"Don't wait for everything to be perfect to start something."</p> </div>
            <div className="qcdiv"> <p>"Despite our efforts to make things go smoothly, many aspects of the world are beyond our control. I accept that anything can happen. Therefore, I believe in the importance of resilience, getting back up, and starting fresh each day."</p> </div>
            <div className="qcdiv"> <p>"Don't wait for everything to be perfect to start something."</p> </div>
            
          
           
        </div>
    </div>
  )
}

export default Quotes