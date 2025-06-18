import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c093a43e-68d9-4515-ac44-6d6d3aa3a99c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our customers.</p>
        <ul>
          <li><img src={mail_icon} alt="" />bharathmarineservicecontact@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 9025741637</li>
          <li><img src={location_icon} alt="" />Nagapattinam Harbour, Nagapattinam, Tamil Nadu 611003</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label htmlFor="Phone">Phone</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label htmlFor="">Write Your Message here</label>
          <textarea name="Message" rows="6" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
