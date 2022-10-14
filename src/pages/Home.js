import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import NewPost from '../components/NewPost'
import MoreNews from '../components/MoreNews'
import About from '../components/About'
import Illustrations from '../components/illustrations'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewPost />
      <MoreNews />
      <About />
      <Illustrations />
      <Footer />
    </>
  )
}

export default Home