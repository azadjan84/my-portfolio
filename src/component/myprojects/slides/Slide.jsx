import React from 'react'
import "./slide.css"
import gitIcon from "./images/gitIcon.png"
import eye from "./images/eye.png"
function Slide({
  projectTile,
  language,
  onlineLink,
  logo,
  poster,
  github,
  description
}) {
  return (
    <div className='slideContainer' style={{backgroundImage: `url(${logo})`}}>
        <div className="projecttitle"> <p>{projectTile}</p> </div>  
        <div className="icons">
          <a href={github}><img src={gitIcon} title='visite code' alt="" /></a>
          <a href={onlineLink}><img src={eye} alt="" title=' visite Website' /></a>
          
          
        </div>
    </div>
  )
}

export default Slide