import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import MainPage from '../mainPage/MainPage'
import Menu from '../menu/Menu'
import Projects from '../myprojects/Projects'
import Skills from '../skills/Skills'
import Experiance from '../experiance/Experiance'
import Study from '../studies/Study'
import Notresponsive from '../notResponsive/Notresponsive'
import Products from '../products/Products'

function Home() {

  const [isResponsive, setIsResponsive] = useState(true);
  useEffect(()=>{
    const handleResize =  ()=>{
      if(window.innerWidth<1140){
        setIsResponsive(false)
      }else{
        setIsResponsive(true)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
  },[])
  return (
    <div className={isResponsive && "not-responsive"}>
      {!isResponsive ? <Notresponsive /> : 
      <>
      <MainPage />
      <Menu/>
      <Products />
      <Projects />
      <Skills />
      <Experiance />
      <Study />
      <Footer />
      </>
    }
    </div>
  )
}

export default Home