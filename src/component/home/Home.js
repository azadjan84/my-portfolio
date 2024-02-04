import React from 'react'
import Footer from '../footer/Footer'
import MainPage from '../mainPage/MainPage'
import Menu from '../menu/Menu'
import Projects from '../myprojects/Projects'
import Skills from '../skills/Skills'

function Home() {
  return (
    <div>
      <MainPage />
      <Menu/>
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home