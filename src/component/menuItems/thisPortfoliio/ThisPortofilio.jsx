import React from 'react'
import { linkProjects } from '../../myprojects/data';

function ThisPortofilio({setNotBuildPage}) {
    const noLink = true;
    const showCloseBtn= true;
    const itemId =2;


    const goBackToProjects=()=>{

    }
  return (
    <div className='oneContainer'>
        <div className="divOneBody">
             {showCloseBtn?<div className="closeBtn"><img onClick={goBackToProjects} src="" alt="" /></div> :"" } 
            <div className="oneLeft">
              <div className="imgdiv">
                <div className="Onetitle">
                  <p>{noLink? linkProjects[itemId].projectTile : ""} </p>
                    <div className="oneIcons">
                      <a href={ noLink? linkProjects[itemId].github :""} ><img src="" style={{width:'60px', height:'60px'}} title="Visiit the code" alt='' />View code</a>
                     <a href={noLink? linkProjects[itemId].onlineLink :""} >
                      {noLink? <img src="" style={{width:'70px', height:'70px'}} title='visit the website' alt="" /> : <img  alt="" />} View Project
                      </a>
                    
                </div>
                </div>
                <img src={noLink? linkProjects[itemId].poster :"" } alt="" />
              </div>
            </div>
            <div className="oneRight">
              <div className="oneRightBody">
              <div className="desc">
                  <p>About the project</p>
                  <div className="descText"> { noLink? linkProjects[itemId].description: ""} </div>
                </div>
                <div className="languages">
                    <p>Technologies employed in the build</p>
                    <div className="buildTechnologie">
                    <div className="technologies">
                      <p> { noLink? linkProjects[itemId].language[0].name : "" } </p>
                      <img src={linkProjects[itemId].language[0].icon} alt="" />
                    </div>
                    <div className="technologies">
                      <p> { noLink? linkProjects[itemId].language[1].name : ""} </p>
                      <img src={ noLink? linkProjects[itemId].language[1].icon: ""} alt="" />
                    </div>
                    <div className="technologies">
                      <p> { noLink? linkProjects[itemId].language[2].name: ""} </p>
                      <img src={ noLink? linkProjects[itemId].language[2].icon: ""} alt="" />
                    </div>   
                    </div>   
                </div>
              </div>
               
            </div>

        </div>
    </div>
  )
}

export default ThisPortofilio