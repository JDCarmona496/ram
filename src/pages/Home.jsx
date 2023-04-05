import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Texto from '../components/Texto/Texto'
import Footer from '../components/Footer/Footer'
import Video from '../components/Video/Video'
//import Personajes from '../components/Personajes/Personajes'
const Home = () => {
  return (
    <>
    <Navbar brand=""/>
    <Slider/>
    <Texto />
    <Video />
    <Footer />
    </>
  )
}

export default Home