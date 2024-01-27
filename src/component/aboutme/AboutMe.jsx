import React from 'react'
import "./aboutme.css"

function AboutMe({id}) {
  return (
    <div id={id} className='aboutme'>
        <div className="aboutmeBody">
            <div className="aboutLeft">
              <div className="aboutLL">
                <div className="floorF">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <div className="floorS">
                <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <div className="floorT">
                <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
            </div>
            <div className="aboutRight"></div>

        </div>
        
    </div>
  )
}

export default AboutMe