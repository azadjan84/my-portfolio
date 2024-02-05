import React, { useState } from 'react'
import me from "./images/me.png"
import piano from "./images/piano.jpg"
import polyvalant from "./images/polyvant.png"
import "./exper.css"
import experiances from './expData'
function Experiance() {
    const [selectedWork, setSelectedWork] = useState(1);
    const changeWork =(id)=>{
            setSelectedWork(id)
    }
  return (
    <div className='exContainer' >
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
                            <img src={piano} alt="" />
                        </div>
                        <div className="placdesc">
                            <h3>PianoFabriek</h3>
                            <p className='workTitle'>Barman</p>
                            <p className='duration'>1 Year</p>
                            <div className="startDate">01/02/2023  -  21/01/2024 </div>
                            <p className='typeOfWork'>Full Time</p>
                            <p className='whereWork'>Brussels</p>

                        </div>
                    </div>
                </div>
                <div className="exRmid">
                <div className="workImg">
                    <img src={me} alt="" />
                </div>
                </div>
                <div className="exRright">
                    <div className="exRdesc">
                        <div className="workSymbol">
                            <img src={polyvalant} alt="" />
                        </div>
                        <div className="taskDesc">
                            <div className="tasks">
                                <p>Contact & service</p>
                                <p>Multitasking</p>
                                <p>Teamwork</p>
                                <p>Conflict resolution</p>
                                <p>Organization</p>
                                <p>Stock Management</p>
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