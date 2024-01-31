import React from 'react'
import Footer from '../footer/Footer'
import MainPage from '../mainPage/MainPage'
import Menu from '../menu/Menu'
import Projects from '../myprojects/Projects'

function Home() {
  return (
    <div>
      <MainPage />
      <Menu/>
      <Projects />
      <Footer />
    </div>
  )
}

export default Home