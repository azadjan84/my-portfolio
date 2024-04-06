import React from 'react'
import "./showOneProject.css"
import xBtn from "../slides/images/x.png"
import gitIcon from "../slides/images/gitIcon.png"
import eyeIcon from "../slides/images/eye.png"
import { linkProjects, unLinkProjects } from '../data';
function ShowOneProject({
  showProjectId,
  setShowProject,
  showProject,
  noLink,
  setNoLink,
  showCloseBtn
}) {

  const goBackToProjects =()=>{
    setShowProject(true)
    setNoLink(false)
  }


  let itemId= showProjectId-1;
  return (
    <div className='oneContainer'>
        <div className="divOneBody">
             {showCloseBtn?<div className="closeBtn"><img onClick={goBackToProjects} src={xBtn} alt="" /></div> :"" } 
            <div className="oneLeft">
              <div className="imgdiv">
                <div className="Onetitle">
                  <p>{noLink? linkProjects[itemId].projectTile : unLinkProjects[itemId].projectTile} </p>
                    <div className="oneIcons">
                      <a href={ noLink? linkProjects[itemId].github : unLinkProjects[itemId].github} ><img src={gitIcon} style={{width:'60px', height:'60px'}} title="Visiit the code" alt='' />View code</a>
                     <a href={noLink? linkProjects[itemId].onlineLink : unLinkProjects[itemId].onlineLink} >
                      {noLink? <img src={eyeIcon} style={{width:'70px', height:'70px'}} title='visit the website' alt="" /> : <img  alt="" />} View Project
                      </a>
                    
                </div>
                </div>
                <img src={noLink? linkProjects[itemId].poster : unLinkProjects[itemId].poster } alt="" />
              </div>
            </div>
            <div className="oneRight">
              <div className="oneRightBody">
              <div className="desc">
                  <p>About the project</p>
                  <div className="descText"> { noLink? linkProjects[itemId].description: unLinkProjects[itemId].description} </div>
                </div>
                <div className="languages">
                    <p>Technologies employed in the build</p>
                    <div className="buildTechnologie">
                    <div className="technologies">
                      <p> { noLink? linkProjects[itemId].language[0].name : unLinkProjects[itemId].language[0].name } </p>
                      <img src={linkProjects[itemId].language[0].icon} alt="" />
                    </div>
                    <div className="technologies">
                      <p> { noLink? linkProjects[itemId].language[1].name : unLinkProjects[itemId].language[1].name} </p>
                      <img src={ noLink? linkProjects[itemId].language[1].icon: unLinkProjects[itemId].language[1].icon} alt="" />
                    </div>
                    <div className="technologies">
                      <p> { noLink? linkProjects[itemId].language[2].name: unLinkProjects[itemId].language[2].name} </p>
                      <img src={ noLink? linkProjects[itemId].language[2].icon: unLinkProjects[itemId].language[2].icon} alt="" />
                    </div>   
                    </div>   
                </div>
              </div>
               
            </div>

        </div>
    </div>
  )
}

export default ShowOneProject