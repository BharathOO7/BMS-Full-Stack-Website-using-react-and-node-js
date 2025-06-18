import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
        </div>
    <div className ="about-right">
        <h3>ABOUT COMPONY</h3>
        <h2>BHARATH MARINE SERVICE</h2>
        <p>For over two decades, Bharath Marine Service has been at the forefront of maritime excellence, crafting ships, vessels, boats, and barges with unmatched expertise. As the best shipbuilding company in India, we specialize in high-quality shipbuilding services that combine precision, durability, and a touch of luxury.</p><p>Established in 2004, we take pride in delivering top-tier marine solutions, ranging from boat construction to bespoke vessel engineering and maintenance. Alongside our superior craftsmanship, we provide marine spare parts and essential components at the best value for money, ensuring optimal performance and longevity for every vessel.</p><p>Built on trust and innovation, our commitment to quality ensures that every project meets the highest standards of maritime excellence. Whether you're looking for affordable marine vessel repairs, high-performance upgrades, or cutting-edge marine craftsmanship, Bharath Marine Service is your gateway to the finest in shipbuilding services.</p>
    </div>
   </div>
  )
}
import './About.css'
export default About
