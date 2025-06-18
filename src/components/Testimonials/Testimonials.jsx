import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

const slideForward = () => {
  if (tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
  if (tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;

}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick = {slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick = {slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Anwar</h3>
                  <span>Chennai,TamilNadu</span>
                </div>
              </div>
              <p>"We’ve partnered with Bharatrh Marine Services on multiple projects, from smaller utility vessels to specialized barges, and they consistently exceed expectations. Their professionalism, dedication to quality, and excellent after-sales support make them our go-to shipbuilding company in South India. Always a pleasure working with them!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Kumar</h3>
                  <span>Nagapattinam,TamilNadu</span>
                </div>
              </div>
              <p>"Bharatrh Marine Services delivered our new fishing boat, and we couldn't be happier! The build quality is exceptional, and it’s truly made a difference to our daily catches. It's sturdy, reliable, and perfectly suited for the coastal waters here in South India. Highly recommend their craftsmanship!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>John Martin</h3>
                  <span>Kakinada,Andhra Pradesh</span>
                </div>
              </div>
              <p>"Our new service barge from Bharatrh Marine Services is a game-changer for our operations. The team understood our complex requirements and built a vessel that’s incredibly efficient and robust. It’s exactly what we needed, and the attention to detail in its construction is evident. Fantastic work!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Mathew</h3>
                  <span>Kerala,India</span>
                </div>
              </div>
              <p>"Bharatrh Marine Services built a custom vessel for our unique logistical needs, and they did it well within the agreed timeframe. They were incredibly responsive to our specific design requests and ensured every detail was perfect. The vessel performs flawlessly. Truly a top-tier shipbuilding experience!"</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
