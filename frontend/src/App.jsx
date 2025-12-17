import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Casestudies from './pages/Casestudies'
import Working from './pages/Working'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
     <Navbar/>
     <Home/>
     <Service/>
     <Casestudies/>
     <Working/>
     <Team/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
