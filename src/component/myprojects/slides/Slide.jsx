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
  description,
  showProject,
  setShowProject,
  showProjectId,
  setShowProjectId,
  itemId
}) {

  const showOne = (id)=>{
    setShowProject(false)
    setShowProjectId(id)
  }
  return (
    <div onClick={() => showOne(itemId)} className='slideContainer' style={{backgroundImage: `url(${logo})`}}>
        <div className="projecttitle"> <p>{projectTile}</p> </div>  
        <div className="icons">  
        </div>
    </div>
  )
}

export default Slide