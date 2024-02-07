import React, { useState } from 'react'
import "./exper.css"
import experiances from './expData'
function Experiance() {
    const backMark = "<"
    const [selectedWork, setSelectedWork] = useState(1);
    let firstImg = 0;
    const changeWork =(id)=>{
            setSelectedWork(id)
    }
  return (
    <div className='exContainer' id='experianceId' >
        <a style={{position:"absolute", top:"40px", left:"18px"}} className='menuId' href="#menuId"> {backMark} Back</a>
        <div className="exBody">
            <div className="exLeft">
                <div className="experianceTitle"> Experiences</div>
                <div className="expeMenu">
                    <ul>
                        { experiances.map(item =>(
                            <li onClick={() =>changeWork(item.id)} className={selectedWork == item.id? "slected" :""} >{item.workTitle} </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="exRight">
                <div className="exRleft">
                    <div className="workPlace">
                        <div className="placeLog">
                            <img src={experiances[selectedWork-1].companyLogo} alt="" />
                        </div>
                        <div className="placdesc">
                            {experiances[selectedWork-1].id == 3? <h3> <a style={{color:"white"}} href="https://li.ki/">LIKI </a> {experiances[selectedWork-1].nameOfCompany} </h3> :<h3>{experiances[selectedWork-1].nameOfCompany}</h3>}
                            <p className='workTitle'>{experiances[selectedWork-1].workTitle } </p>
                            <p className='duration'>{experiances[selectedWork-1].durantion } </p>
                            <div className="startDate">{experiances[selectedWork-1].startDate } {experiances[selectedWork-1].endDate }  </div>
                            <p className='typeOfWork'>{experiances[selectedWork-1].typeofWork }</p>
                            <p className='whereWork'>{experiances[selectedWork-1].whereJob }</p>

                        </div>
                    </div>
                </div>
                <div className="exRmid">
                <div className="workImg">
                    <img className={experiances[selectedWork-1].id ==1 ?"fixPic" : experiances[selectedWork-1].id ==5 ?"fixImgF" :""}  src={experiances[selectedWork-1].imgMid } alt="" />
                </div>
                </div>
                <div className="exRright">
                    <div className="exRdesc">
                        <div className="workSymbol">
                            <img src={experiances[selectedWork-1].taskImg} alt="" />
                        </div>
                        <div className="taskDesc">
                            <div className="tasks">
                                {experiances[selectedWork-1].tasks.map(item =>(
                                    <p> {item} </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Experiance