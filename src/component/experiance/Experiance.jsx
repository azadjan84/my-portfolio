import React from 'react'
import "./exper.css"
import experiances from './expData'
function Experiance() {

    console.log(experiances)
  return (
    <div className='exContainer' >
        <div className="exBody">
            <div className="exLeft">
                <div className="experianceTitle"> Experiences</div>
                <div className="expeMenu">
                    <ul>
                        { experiances.map(item =>(
                            <li>{item.workTitle} </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="exRight"></div>
        </div>

    </div>
  )
}

export default Experiance