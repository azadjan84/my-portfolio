import React from 'react'
import "./projects.css"
import Slide from './slides/Slide'

function Projects() {
  return (
    <div className='projectContainer'>
      <div className="pcBody">
          <div className="slides">
              <div className="sLeft"></div>
              <div className="sMiddle">
                <div className="sMT">
                  <Slide />
                  <Slide />
                  <Slide />
                </div>
                <div className="sMB">
                <Slide />
                <Slide />
                <Slide />
              </div>
              </div>
              
              <div className="sRight"></div>
          </div>
      </div>

    </div>
  )
}

export default Projects