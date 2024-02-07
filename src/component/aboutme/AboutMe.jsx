import React, { useState } from 'react'
import "./aboutme.css"

function AboutMe({id}) {
  const [activeIndex, setActiveIndex ] = useState(0)

  const questions = [
    {question:"Who am I", answer:"Team player, detail-oriented, sociable, always eager to improve my professional and interpersonal skills, consistently responsible for my work and tasks. I possess a talent for coming up with solutions for challenges."},
    {question:"How others see me?", answer: "loream loream lreaom isht i solog osposi is"},
    {question:"How others see me?", answer: "loream loream lreaom isht i solog osposi is"},
    {question:"How others see me?", answer: "loream loream lreaom isht i solog osposi is"},
  ];
  return (
    <div id={id} className='aboutme'>
        <div className="aboutmeBody">
            <div className="aboutLeft"></div>

            <div className="aboutRight">
              <div className="AInfos">
                <div className="accordion-container">
                  {questions.map((q, index) => (
                    <div key={index}>
                      <div className={`accordion ${activeIndex === index? "active": ""}`}>{q.question} </div>
                      <div className={`panel ${activeIndex === index? "active": ''}`}>{q.answer} </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default AboutMe