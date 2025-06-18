import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className = 'hero container'>
        <div className="hero-text">
            <h1>Crafting Excellence in Marine Engineering</h1>
            <p>Building on a foundation of trust and unwavering quality, we deliver ships that set the standard for excellence.Beyond shipbuilding, we craft legacies. Each vessel is a testament to our unwavering commitment to quality, built with profound trust and an artisan's touch for unparalleled luxury at sea.</p>
            <button className='btn'>Explore more </button>
            </div>
        </div>
  )
}

export default Hero

/*<button className='btn'>Explore more <img src ={dark_arrow} alt="" /></button>*/