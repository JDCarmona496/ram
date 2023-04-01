import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Texto from '../components/Texto/Texto'
import Footer from '../components/Footer/Footer'
import Personajes from '../components/Personajes/Personajes'
const Home = () => {
  return (
    <header>
    <Navbar/>
    <Slider/>
    <br></br>
    <Texto/>
    <br></br>
    <Personajes />
    <Footer />
    </header>
  )
}

export default Home