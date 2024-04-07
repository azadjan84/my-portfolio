import React, { useState } from 'react'
import "./product.css"
import {linkProjects} from "../myprojects/data"

import eco from "./eco.png"
import gym from "./gym.png"
import modern from "./mod.png"
import oldP from "./oldp.png"
import port from "./port.png"
import dropdown from "./dropdown.png"


function Products() {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown =()=>{
    setDropDown(!dropDown);
  }

  return (
    <div id='projectsId' className={dropDown? "products active" :  'products' } >
        <div className="product">
            <div className="proleft">
                <div onClick={handleDropDown} className="dropdown">
                    <p>Overview the project list</p>
                    <img src={dropdown} alt="" />
                </div>
            </div>
            
            <div className={dropDown? "showList list" : "hideList"}>
                <div className="listBody">

                <div className="listCard listCardFix">
                        <div className="listtitle">  <h3>Project</h3> </div>
                        <div className="listDesc">
                            <h3>Description</h3>
                        </div>
                        <div className="listTech">
                            <h3>Technology</h3>
                        </div>
                        <div className="LinkToCode">
                            <h3>Link to code</h3>
                        </div>
                        <div className="LinkToWeb">
                            <h3 >Link to application</h3>
                        </div>
                    </div>


                        {
                            linkProjects.map((item, index)=> (
                                <div key={index} className="listCard">
                                    <div className="listtitle"> {item.projectTile} </div>
                                    <div className="listDesc">
                                        <p> {item.description} </p>
                                    </div>
                                    <div className="listTech">
                                        {item.language.map((tech, i)=> ( 
                                            <p key={i}>  {tech.name} <img src={tech.icon} alt="" /> </p>
                                        )) }
                                    </div>
                                    <div className="LinkToCode">
                                        <p href={item.github}> {item.github} </p>
                                    </div>
                                    <div className="LinkToWeb">
                                        <p >{item.onlineLink}</p>
                                </div>
                            </div>
                            ))
                        }
              
                </div>
            </div>
        
        </div>
        </div>
    
  )
}

export default Products