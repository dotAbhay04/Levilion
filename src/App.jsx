import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Featured from './Components/Featured'
import Story from './Components/Story'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Featured/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
