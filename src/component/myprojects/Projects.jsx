import React, { useState } from 'react'
import "./projects.css"
import Slide from './slides/Slide'
import { linkProjects,unLinkProjects } from './data';
import ShowOneProject from './showOneProject/ShowOneProject';

function Projects() {  
  const [showProject, setShowProject] = useState(true)
  const [showProjectId, setShowProjectId] = useState(0)
  const [noLink, setNoLink] = useState(false)



  return (
    <div className="projectContainer" id='projects' >
      <div className="pcBody">
        {showProject? 
          <div className="slides">
              
          <div className="sMiddle">
            <div className="sMT">
              <h1 style={{width:"100%", textAlign:"center", marginBottom:"15px" }}>Projects with online link</h1>
              <div className="sMTBox">
                {
                  linkProjects.map((item,index) => (
                    <Slide key={index} projectTile={item.projectTile} language={item.language} 
                    onlineLink={item.onlineLink}  logo={item.logo} poster={item.poster} github={item.github}
                     description={item.description} showProject={showProject} setShowProject={setShowProject}
                     showProjectId={showProjectId} setShowProjectId={setShowProjectId}
                     itemId={item.id} setNoLink={setNoLink} />
                  ))
                }
                
              
              </div>  
            </div>
            <div className="sMB">
              <h1 style={{width:"100%", textAlign:"center", marginBottom:"15px" }}>Projects without online link</h1>
              <div className="sMTBox">
              {   
                  unLinkProjects.map((item,index) => (
                    <Slide key={index} projectTile={item.projectTile} language={item.language} onlineLink={item.onlineLink} 
                     logo={item.logo} poster={item.poster} github={item.github} description={item.description}
                     showProject={showProject} setShowProject={setShowProject}
                     showProjectId={showProjectId} setShowProjectId={setShowProjectId}
                     itemId={item.id} setNoLink={setNoLink}
                     />
                  ))
                }
              </div>
          </div>
          </div>
          
      </div>
        :
          <div className="OneProject">
            <ShowOneProject showCloseBtn={true} showProjectId={showProjectId} setShowProject={setShowProject} showProject={showProject}
              noLink={noLink} setNoLink={setNoLink}
            />
          </div>
        }
          
      </div>

    </div>
  )
}

export default Projects