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
    {id:1,question:"Who am I?",meTitle:"So, who am I?" ,meDesc:"My motivation is growth, both professionally and personally. Originating from Afghanistan, I'm driven to carve out my career path here in Belgium as a web developer and IT specialist. I aspire to learn from the best, constantly improving myself to bring out my fullest potential. Though inherently competitive, I prioritise teamwork and collaboration."},
    {id:2,question:"Why me?", meTitle:"Well," , meDesc:"The combination of my coding skills and background in accounting provides a unique perspective. Working with precision and understanding tasks, I am adaptable to various challenges and can readily acquire new skills. My experience as a coordinator of ping and working in a bar has honed my abilities as a team player, making me responsible, receptive to feedback, and open to learning. Coming from a country like Afghanistan and experiencing significant cultural differences has made me a better, more resilient, and responsible person, enhancing my interpersonal skills. Altogether, these qualities make me an ideal candidate for this job."},
    {id:3,question:"My strengths", meTitle: "Strengths",meDesc:"1 -(COACHING) I coached people in sports: taekwondo, football and now ping-pong. I can communicate effectively with individuals from different background, and bring out the best in them and forge a team. As a coach I faced challenges that require sound and fast decisions, and still keeping priorities right. It showed I can organise and manage. 2 - (COMPETITIVENESS) I am competitive, not only in sports. But also in daily live, in the sense that I always want to learn from the one that is better than me. When I studied web development I checked how others did, and tried to write even better code ; more robust, smarter, shorter. Bydoing so I could also learn faster. 3 - (FAST LEARNING), I was able to learn English in Afghanistan, French here in Brussels and now Dutch in Brugge. I also completed the BeCode courses with quick understanding and really good result. I can say that I am a good and fast learner." },
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