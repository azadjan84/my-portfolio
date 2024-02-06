import meBar from "./images/me.png"
import pingPong from "./images/pingpong.png"
import codingGuy from "./images/coding.png"
import sellerGuy from "./images/manquan.png"
import meTeather from "./images/meTheater.png"


import pianoImg from "./images/piano.jpg"
import signaImg from "./images/singaImg.jpg"
import likiImg from "./images/likiLogo.png"
import primarkt from "./images/primarkt.jpeg"
import tourPlom from "./images/tourPlom.jpg"

import polyvalant from "./images/polyvant.png"
import coach from "./images/coach.png"
import codingSym from "./images/programing.png"
import theaterSmb from "./images/theaterSmb.png"


const experiances = [
    {
        id:1,
        workTitle:"BARMAN",
        durantion:"1 year",
        startDate:"01/02/23  -  "  ,
        endDate:"01/02/2024"  ,
        nameOfCompany:"PianoFabriek (House Of The Flemish Community Commission(VGV)",
        companyLogo:pianoImg,
        imgMid:meBar,
        taskImg:polyvalant,
        typeofWork:"FULL TIME",
        whereJob:"Brussels",
        tasks: ["- Contact & service", "- Multitasking","- Teamwork","- Conflict resolution","- Organization", "- Stock Management"]
    },


    {
        id:2,
        workTitle:"PING PONG COORDINATOR",
        durantion:"2.5 year",
        startDate:"01/04/2021  -  "  ,
        endDate:"01/09/2023"  ,
        nameOfCompany:"SINGA ( Through social activities establish connections between Brussels residents and newcomers).",
        companyLogo:signaImg,
        imgMid:pingPong,
        taskImg:coach,
        typeofWork:"PART TIME",
        whereJob:"Brussels",
        tasks: ["- Greeting and registration of newcomers", "- Ping pong skill development","- Ping pong tournaments organization.","- Coordination and management of PP event", "- Decision making"]
    },

    {
        id:3,
        workTitle:"WEB DEVELOPMENT INTERNSHIP",
        durantion:"3 Months)",
        startDate:"01/10/2022  -  "  ,
        endDate:"31/01/2023"  ,
        nameOfCompany:"LIKI (A startup that was developing a new communication app.)",
        companyLogo:likiImg,
        imgMid:codingGuy,
        taskImg:codingSym,
        typeofWork:"FULL TIME",
        whereJob:"Brussels",
        tasks: ["- Active participation in the development of the DUG app including the creation of the app's website from scratch.","- Contribution to the design phase in Figma","- Applied design elements and APIs in the app using React technology."]
    },

    {
        id:4,
        workTitle:"SALESPERSON AT PRIMARK",
        durantion:"6 Months",
        startDate:"01/06/2019  -  "  ,
        endDate:"01/01/2020"  ,
        nameOfCompany:"PRIMARK",
        companyLogo:primarkt,
        imgMid:sellerGuy,
        taskImg:polyvalant,
        typeofWork:"FULL TIME",
        whereJob:"Brussels",
        tasks: ["- Sales assistant", "- Cash and customer management","- Teamwork","- Stock management"]
    },

    {
        id:5,
        workTitle:"THEATRE PERFORMANCE",
        durantion:"4 Months",
        startDate:"01/02/2019  -  "  ,
        endDate:"01/06/2019"  ,
        nameOfCompany:"TOUR A PLOBM CULTURAL CENTER",
        companyLogo:tourPlom,
        imgMid:meTeather,
        taskImg:theaterSmb,
        typeofWork:"Once a week",
        whereJob:"Brussels",
        tasks: ["- Communication", "- Teamwork,","- Stage Presence:"]
    },
    

];


export default experiances;