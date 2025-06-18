import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campous/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
const App = () => {

const [playState, setPlayState] = React.useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'OUR SERVICES' title = 'What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle = 'GALLERY' title = 'Take A Look'/>
        <Campus/>
        <Title subTitle = 'CUSTOMERS' title = 'What Client says'/>
        <Testimonials/>
        <Title subTitle = 'CONTACT US' title = 'Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
