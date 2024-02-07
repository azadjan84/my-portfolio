import React, { useState } from 'react'
import "./aboutme.css"

function AboutMe({id,setNotBuildPage}) {
  const [activeIndex, setActiveIndex ] = useState(0)
  const backMark = "<"

  const toggleAccordion = (index)=>{
    setActiveIndex(activeIndex ===index ? null :index)
  }

  const goBackFun =()=>{
    setNotBuildPage(false)
  }

  const questions = [
    {question:"Who am I?",meTitle:"So, who am I?" ,meDesc:"Team player, detail-oriented, sociable, always eager to improve my professional and interpersonal skills, consistently responsible for my work and tasks. I possess a talent for coming up with solutions for challenges."},
    {question:"Why me?", meTitle:"My values" , meDesc:"loream loream lreaom isht i solog osposi is"},
    {question:"values?", meTitle: "me here ",meDesc:"loream loream lreaom isht i solog osposi is"},
    {question:" love?", meTitle: "What do i do?" ,meDesc:"loream loream lreaom isht i solog osposi is"},
  ];
  return (
    <div id={id} className='aboutme'>
        <div className="backmark" onClick={()=>goBackFun()} > {backMark} Back </div>
        <div className="aboutmeBody">
            <div className="aboutLeft">
                <div className="aboutMeList">
                  {questions.map((listName, index)=> (
                    <p className={activeIndex == index ?"active" :""} key={index} onClick={()=>toggleAccordion(index)} >{listName.question} </p>
                  ))}
                </div>
                <div className="menuDesc">
                    <h1>{questions[activeIndex].meTitle}</h1>
                    <p>{questions[activeIndex].meDesc}</p>
                </div>
            </div>

            <div className="aboutRight">
              <div className="myImg">

              </div>
            </div>

        </div>
        
    </div>
  )
}

export default AboutMe