import React from 'react'
import "./showOneProject.css"
import xBtn from "../slides/images/x.png"
import gitIcon from "../slides/images/gitIcon.png"
import eyeIcon from "../slides/images/eye.png"
import { linkProjects } from '../data';
function ShowOneProject({showProjectId}) {
  let itemId= showProjectId-1;
    console.log(linkProjects[itemId].description)
  return (
    <div className='oneContainer'>
        <div className="divOneBody">
            <div className="closeBtn"><img src={xBtn} alt="" /></div>
            <div className="oneLeft">
              <div className="imgdiv">
                <div className="Onetitle">
                  <p>{linkProjects[itemId].projectTile} </p>
                    <div className="oneIcons">
                    <img src={gitIcon} style={{width:'70px', height:'70px'}} title="Visiit the code" alt='' />
                    <img src={eyeIcon} style={{width:'70px', height:'70px'}} title='visit the website' alt="" />
                </div>
                </div>
                <img src={linkProjects[itemId].poster} alt="" />
              </div>
            </div>
            <div className="oneRight">
              
            </div>

        </div>
    </div>
  )
}

export default ShowOneProject