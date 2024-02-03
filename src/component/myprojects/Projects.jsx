import React from 'react'
import "./projects.css"
import Slide from './slides/Slide'
import { linkProjects,unLinkProjects } from './data';

function Projects() {  

  return (
    <div className='projectContainer'>
      <div className="pcBody">
          <div className="slides">
              
              <div className="sMiddle">
                <div className="sMT">
                  <div className="sMTBox">
                    {
                      linkProjects.map((item,index) => (
                        <Slide key={index} projectTile={item.projectTile} language={item.language} onlineLink={item.onlineLink}  logo={item.logo} poster={item.poster} github={item.github} description={item.description} />
                      ))
                    }
                    
                  
                  </div>  
                </div>
                <div className="sMB">
                  <div className="sMTBox">
                  {
                      linkProjects.map((item,index) => (
                        <Slide key={index} projectTile={item.projectTile} language={item.language} onlineLink={item.onlineLink}  logo={item.logo} poster={item.poster} github={item.github} description={item.description} />
                      ))
                    }
                  </div>
              </div>
              </div>
              
          </div>
      </div>

    </div>
  )
}

export default Projects