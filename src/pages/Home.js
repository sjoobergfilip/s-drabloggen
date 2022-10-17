import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import NewPost from '../components/NewPost'
import MoreNews from '../components/MoreNews'
import About from '../components/About'
import Illustrations from '../components/illustrations'
import Footer from '../components/Footer'
import ReactGA from 'react-ga';


const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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