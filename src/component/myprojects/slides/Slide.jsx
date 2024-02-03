import React from 'react'
import "./slide.css"
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
    <div className='slideContainer' style={{backgroundImage: `url(${logo})`}}>{projectTile} </div>
  )
}

export default Slide