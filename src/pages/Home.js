import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import NewPost from '../components/NewPost'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewPost />
    </>
  )
}

export default Home