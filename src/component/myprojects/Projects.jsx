import React from 'react'
import "./projects.css"
import Slide from './slides/Slide'

function Projects() {
  return (
    <div className='projectContainer'>
      <div className="pcBody">
          <div className="slides">
              
              <div className="sMiddle">
                <div className="sMT">
                  <div className="sMTBox">
                    <Slide />
                    <Slide />
                    <Slide />
                    <Slide />
                    <Slide />
                  </div>  
                </div>
                <div className="sMB">
                  <div className="sMTBox">
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                  </div>
              </div>
              </div>
              
          </div>
      </div>

    </div>
  )
}

export default Projects