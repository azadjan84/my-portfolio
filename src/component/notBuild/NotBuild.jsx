import React from 'react'
import "./notBuild.css"

function NotBuild({setNotBuildPage}) {
  const backMark = "<"
    const goBackToMenu =()=>{
        setNotBuildPage(false)
    }
  return (
    <div className='notBuild'>
        <div className="notContainer">
            <p>This is page is not build yet!</p>
            <div onClick={goBackToMenu} className='button'>  {backMark} Back</div>
        </div>
    </div>
  )
}

export default NotBuild