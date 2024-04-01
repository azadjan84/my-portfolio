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
    {id:1,question:"Who am I?",meTitle:"So, who am I?" ,meDesc:"Team player, detail-oriented, sociable, always eager to improve my professional and interpersonal skills, consistently responsible for my work and tasks. I possess a talent for coming up with solutions for challenges."},
    {id:2,question:"Why me?", meTitle:"Well," , meDesc:"The combination of my coding skills and background in accounting provides a unique perspective. Working with precision and understanding tasks, I am adaptable to various challenges and can readily acquire new skills. My experience as a coordinator of ping and working in a bar has honed my abilities as a team player, making me responsible, receptive to feedback, and open to learning. Coming from a country like Afghanistan and experiencing significant cultural differences has made me a better, more resilient, and responsible person, enhancing my interpersonal skills. Altogether, these qualities make me an ideal candidate for this job."},
    {id:3,question:"My strengths", meTitle: "Strengths",meDesc:"1 -(Fast Learning) I am a fast learner, always improving and solving problems. I adapt well to change and contribute positively to teamwork I find joy in learning new things and continuously strive for personal and professional growth. 2 - (Team Collaboration) I am a collaborative team player with a strong focus on fostering good communication and relationships within the group. 3 - (Adaptable and forward-thinking) , I welcome constructive criticism and actively seek opportunities to improve myself by identifying and addressing my weaknesses" ,},
    // {id:4,question:" My weaknesses?", meTitle: "Needs to improve" ,meDesc:"I take promises seriously, which can be both a strength and a weakness. I used to sacrifice too much for others, but now I'm learning to find a balance. I only make promises when I'm sure I can keep them."},
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
                    <h1 className={questions[activeIndex].id == 3? 'colorWhite': questions[activeIndex].id == 4?"colorYellow": ""}  >{questions[activeIndex].meTitle}</h1>
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