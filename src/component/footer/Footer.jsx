import React from 'react'
import "./footer.css"
import email from "./images/email.png"
import github1  from "./images/github1.png"
import github  from "./images/gitub.png"
import ig  from "./images/ig.png"
import linkedIn  from "./images/linkedin.png"
import phone  from "./images/phone.png"

function Footer() {
  return (
    <div className='footer' id='footerId'>
      <div className="footerBody">
        <div className="leftFooter">
          <h1>AZAD</h1>
          <h1>FARID</h1>
        </div>
        <div className="rightFooter">
          <div className="rfBox">
            <div className="towBox">
                <div className="contanctInfo">
                  <img src={email} alt="" />
                  <p>azadjan84@gmail.com</p>
                </div>

                <div className="contanctInfo">
                  <img src={phone} alt="" />
                  <p>0466 466 459 </p>
                </div>
            </div>

            <div className="towBox">
                <div className="contanctInfo">
                  <a href="https://github.com/Mohammadazadbc?tab=repositories"> <img src={github} alt="" />  </a>
                  <p>Github</p>
                </div>

                <div className="contanctInfo">
                 <a href="https://github.com/azadjan84?tab=repositories"><img src={github1} alt="" /></a>
                  
                  <p>Github</p>
                </div>
            </div>

            <div className="towBox">
                <div className="contanctInfo">
                  <a href=""> <img src={ig} alt="" />  </a>
                  <p>azadjan89</p>
                </div>

                <div className="contanctInfo">
                  <a href="https://www.linkedin.com/in/mohammad-azad84/"><img src={linkedIn} alt="" /></a>
                  
                  <p>Farid Azad</p>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer