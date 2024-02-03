import moveiPoster from "./images/movie.png"
import oldPortfolio from "./images/oldPortfolio.png"
import moderUi from "./images/moderui.png"
import FitnessImg from "./images/fitness.png"
import ecommerceImg from "./images/ecomerce.png"
import youtube from "./images/youtube.png"
import booking from "./images/booking.png"
import chat from "./images/chat.png"
import jmr from "./images/jmr.png"


import portfolio1 from "./images/portfolio1.jpg"
import ecomerce1 from "./images/ecomerce1.png"
import moderui1 from "./images/moderui1.png"
import fitness1 from "./images/fitness1.png"


import movie1 from "./images/Movie.jpg"
import youtube1 from "./images/youtube1.jpg"
import bokking1 from "./images/booking1.png"
import chat1 from "./images/chat1.png"
import koeling from "./images/koelling.jpeg"


import reactIcon from "./images/react.png"
import jsIcon from "./images/js.png"
import springIcon from "./images/spring-boot.png"
import cssIcon from "./images/css.png"
import htmlIcon from "./images/html.png"
import tailwindIcon from "./images/tailwind.png"
import nodeIcon from "./images/node.png"
import rapidIcon from "./images/rapidApi.png"
import mongoIcon from "./images/mongo.png"

const linkProjects = [

    {
        id:1,
        projectTile:"Ecommerce",
        language:[
            {name:"HTML", icon:htmlIcon},
            {name:"CSS", icon:cssIcon},
            {name:"JAVASCRIPT", icon:jsIcon},
        ], 
        onlineLink:"https://mohammadazadbc.github.io/Ecommerce/",
        logo:ecomerce1,
        poster:ecommerceImg,
        github:"https://github.com/Mohammadazadbc/Ecommerce?tab=readme-ov-file",
        description:"This is an E-commerce project built with HTML, CSS, and JS. I found the design on Google, and while it is not fully functional, it features an amazing design. It was a valuable project in terms of learning and provided a great opportunity for skill development."
    },
   
         {
            id:2,
        projectTile:"My Old Portfolio",
        language:[
            {name:"React", icon:reactIcon},
            {name:"Node JS", icon: nodeIcon},
            {name:"CSS", icon: cssIcon},
        ],
        onlineLink:"https://azad-portfolio-pro.netlify.app/",
        logo:portfolio1,
        poster:oldPortfolio,
        github:"https://github.com/Mohammadazadbc/My-Portfolio?tab=readme-ov-file",
        description:"This is my old portfolio built with React and Node.js. I copied the design and rebuilt it following a tutorial from JavaScript Mastery. It is a truly amazing project, though it holds more significance in terms of learning rather than the satisfaction of using my creativity to construct a remarkable piece of work. This realization prompted me to start building my new portfolio, relying on my imagination and drawing inspiration from various aspects of life."
    },
    {
        id:3,
        projectTile:"Website With Modern UI/UX",
        language:[
            {name:"React", icon:reactIcon},
            {name:"CSS", icon:cssIcon},
            {name:"Tailwind", icon:tailwindIcon},
        ],
        onlineLink:"https://modern-ui-ux-app.netlify.app/",
        logo:moderui1,
        poster:moderUi,
        github:"https://github.com/Mohammadazadbc/Modern-ui-ux-app",
        description:"This is an amazing project built with React and Tailwind CSS technology. The design is inspired by JavaScript Mastery, and as I constructed this project, it became an incredible endeavor. It represents a futuristic website with stunning design elements."
    },
    {
        id:4,
        projectTile:"Fitness Exercises App ",
        language:[
            {name:"React", icon:reactIcon},
            {name:"CSS", icon:cssIcon},
            {name:"RapidAPI", icon:rapidIcon},
        ],

        onlineLink:"https://azad-gym.netlify.app/",
        logo:fitness1,
        poster:FitnessImg,
        github:"https://github.com/Mohammadazadbc/Fitness-Exercises-App?tab=readme-ov-file",
        description:"This is an amazing project built with React and RapidAPI. On this website, you can discover exercises for each part of the body presented in GIF format. The exercises are categorized by the corresponding body part, providing detailed instructions on how to perform them. Additionally, there is a search bar that allows you to find specific exercises for particular areas of the body."
    },
    {
        id:5,
        projectTile:"Ecommerce",
        language:[
            {name:"React", icon:reactIcon},
            {name:"CSS", icon:cssIcon},
            {name:"Tailwind", icon:tailwindIcon},
        ],
        onlineLink:"https://mohammadazadbc.github.io/Ecommerce/",
        logo:ecomerce1,
        poster:ecommerceImg,
        github:"https://github.com/Mohammadazadbc/Ecommerce?tab=readme-ov-file",
        description:"This is an E-commerce project built with HTML, CSS, and JS. I found the design on Google, and while it is not fully functional, it features an amazing design. It was a valuable project in terms of learning and provided a great opportunity for skill development."
    },

    

]


const unLinkProjects =[
    {
        id:1,
        projectTile:"Movie Trailer Showcase",
        language:[
            {name:"React", icon:reactIcon},
            {name:"CSS", icon:cssIcon},
            {name:"Spring boot", icon:springIcon},
        ],
        onlineLink:"",
        logo:movie1,
        poster:moveiPoster,
        github:"https://github.com/Mohammadazadbc/movies",
        description:"This project, developed with Spring Boot and React, leverages MongoDB as its database. It retrieves movie details from the database, showcasing names, posters, and concise descriptions. Each movie entry is equipped with a clickable button for viewing the trailer, and users can contribute reviews for the films."
    },
    {
        id:2,
        projectTile:"YouTube Clone Application ",
        language:[
            {name:"React", icon:reactIcon},
            {name:"CSS", icon:cssIcon},
            {name:"API", icon:rapidIcon},
        ],
        onlineLink:"",
        logo:youtube1,
        poster:youtube,
        github:"https://github.com/Mohammadazadbc/Media-yt",
        description:"modern web and responsive build with React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!",
    },
    {
        id:3,
        projectTile:"Booking Website",
        language:[
            {name:"React", icon:reactIcon},
            {name:"Node JS", icon:nodeIcon},
            {name:"Mongo DB", icon:mongoIcon},
        ],
        onlineLink:"",
        logo:bokking1,
        poster:booking,
        github:"https://github.com/Mohammadazadbc/Booking-App",
        description:"This is a full-stack project with React and Node.js. It is an absolutely amazing project that allows you to book hotels. You can search for hotels in different cities, filter by price, number of people, date, and the number of rooms. You can also create an account or log in, and then proceed to reserve a room.",
    },
    {
        id:4,
        projectTile:"Chat App",
        language:[
            {name:"Javascript", icon:jsIcon},
            {name:"CSS", icon:cssIcon},
            {name:"Node JS", icon:nodeIcon},
        ],
        onlineLink:"",
        logo:chat1,
        poster:chat,
        github:"https://github.com/Mohammadazadbc/Realtime-chat-React-Node-Socket.io",
        description: "It is a project built with Node.js and Socket.IO that allows two users to chat together in real-time. In this project, more focus is placed on functionality rather than design." ,
    },
    {
        id:5,
        projectTile:"Proceskoeling Website",
        language:[
            {name:"React", icon:reactIcon},
            {name:"CSS", icon:cssIcon},
            {name:"JS", icon: jsIcon}
        ],
        onlineLink:"",
        logo:koeling,
        poster:jmr,
        github:"https://github.com/Mohammadazadbc/jmr-website",
        description:"This was a project that I developed for a friend who started a new business and asked me to create a website for him. I completed a significant portion of the website at the time, but I faced challenges in putting it online with a good link and making it discoverable on Google for people to find.",
    },
]
export {linkProjects,unLinkProjects}; 